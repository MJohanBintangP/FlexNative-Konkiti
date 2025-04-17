const express = require('express');
const passport = require('passport');
const router = express.Router();

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
  res.redirect(`${process.env.CLIENT_URL}/Home`);
});

router.get('/logout', (req, res) => {
  req.logout((err) => {
    if (err) {
      console.error('Logout Error:', err);
      return res.status(500).json({ message: 'Logout Failed' });
    }

    req.session.destroy((error) => {
      if (error) {
        console.error('Session Destroy Error:', error);
        return res.status(500).json({ message: 'Failed to destroy session' });
      }

      res.clearCookie('connect.sid');
      res.redirect(process.env.CLIENT_URL || '/');
    });
  });
});

// Endpoint untuk mendapatkan data pengguna saat ini
router.get('/user', (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(401).json({ message: 'Not authenticated' });
  }

  const { name, email, picture } = req.user; // Ambil hanya properti yang diperlukan
  res.json({ user: { name, email, picture } });
});

module.exports = router;
