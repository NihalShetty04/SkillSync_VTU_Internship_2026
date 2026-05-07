const mongoose = require('mongoose');

const DoctorSchema = new mongoose.Schema({
  name: String,
  specialization: String,
  experience: String,
  available: Boolean
});

module.exports = mongoose.model('Doctor', DoctorSchema);
