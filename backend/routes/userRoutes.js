const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const User = require('../models/user');
const router = express.Router();

router.get('/progress', authMiddleware, async (req, res) => {
  const user = await User.findById(req.user.id);
  res.json(user.progress);
});

router.post('/progress', authMiddleware, async (req, res) => {
  const { progress } = req.body;
  const user = await User.findById(req.user.id);
  user.progress = progress;
  await user.save();
  res.json({ message: 'Progress updated successfully' });
});

module.exports = router;
