const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  emiratesId: { type: String, unique: true },
  passport: { type: String },
  visa: { type: String },
  insurance: { type: String },
  contractType: { type: String, enum: ['limited', 'unlimited'] },
  branch: { type: String },
  documents: [{ name: String, expiry: Date, filePath: String }],
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });

employeeSchema.index({ 'documents.expiry': 1 });

module.exports = mongoose.model('Employee', employeeSchema);