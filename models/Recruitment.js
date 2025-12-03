const mongoose = require('mongoose');

const recruitmentSchema = new mongoose.Schema({
  jobTitle: { type: String, required: true },
  description: { type: String },
  applicants: [{
    name: String,
    email: String,
    resumePath: String,
    status: { type: String, enum: ['applied', 'interviewed', 'offered', 'hired', 'rejected'] }
  }],
  interviews: [{ date: Date, applicant: String }]
}, { timestamps: true });

module.exports = mongoose.model('Recruitment', recruitmentSchema);