const mongoose = require('mongoose');

const proVisaSchema = new mongoose.Schema({
  employee: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee', required: true },
  visaStage: { type: String, enum: ['entry', 'medical', 'emiratesId', 'stamping'] },
  expiry: { type: Date },
  insuranceExpiry: { type: Date },
  documents: [{ name: String, filePath: String }]
}, { timestamps: true });

module.exports = mongoose.model('ProVisa', proVisaSchema);