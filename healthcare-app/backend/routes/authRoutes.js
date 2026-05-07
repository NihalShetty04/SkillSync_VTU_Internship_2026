const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
      role: req.body.role
    });

    await user.save();

    res.json({ message: 'User Registered' });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post('/login', async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return res.status(400).json({ message: 'User Not Found' });
  }

  const validPassword = await bcrypt.compare(
    req.body.password,
    user.password
  );

  if (!validPassword) {
    return res.status(400).json({ message: 'Invalid Password' });
  }

  const token = jwt.sign({ id: user._id }, 'secretkey');

  res.json({ token, user });
});

module.exports = router;
