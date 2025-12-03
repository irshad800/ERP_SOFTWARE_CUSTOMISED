const mongoose = require('mongoose');

const performanceSchema = new mongoose.Schema({
  employee: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee', required: true },
  period: { type: String, required: true },
  kpis: [{ name: String, score: Number }],
  feedback: { type: String },
  rating: { type: Number },
  recommendations: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Performance', performanceSchema);