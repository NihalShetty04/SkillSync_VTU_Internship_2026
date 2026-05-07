const express = require('express');
const Doctor = require('../models/Doctor');

const router = express.Router();

router.post('/add', async (req, res) => {
  const doctor = new Doctor(req.body);
  await doctor.save();

  res.json({ message: 'Doctor Added' });
});

router.get('/', async (req, res) => {
  const doctors = await Doctor.find();
  res.json(doctors);
});

module.exports = router;
