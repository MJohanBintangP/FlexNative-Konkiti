require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const passport = require('passport');
const session = require('express-session');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');

require('./config/passport');

const app = express();

connectDB();

app.use(express.json());

app.use(
  cors({
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
    credentials: true,
  })
);

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // Gunakan HTTPS di produksi
      sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax', // Sesuaikan dengan mode produksi
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('✅ Server is running!');
});

app.get('/api/user', (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(401).json({ message: 'Not authenticated' });
  }

  const { name, email, picture } = req.user;
  res.json({ user: { name, email, picture } });
});

app.use((err, req, res, next) => {
  console.error('❌ Server Error:', err.message);
  res.status(500).json({ message: 'Internal Server Error' });
});

const PORT = process.env.PORT || 5000;
app
  .listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
  })
  .on('error', (err) => {
    console.error('❌ Server failed to start:', err.message);
  });
