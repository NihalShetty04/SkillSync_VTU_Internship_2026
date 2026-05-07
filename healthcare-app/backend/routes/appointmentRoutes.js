const express = require('express');
const Appointment = require('../models/Appointment');

const router = express.Router();

router.post('/book', async (req, res) => {
  const appointment = new Appointment(req.body);

  await appointment.save();

  res.json({ message: 'Appointment Booked' });
});

router.get('/', async (req, res) => {
  const appointments = await Appointment.find();
  res.json(appointments);
});

module.exports = router;
