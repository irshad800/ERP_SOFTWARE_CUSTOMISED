const mongoose = require('mongoose');

const assetSchema = new mongoose.Schema({
  name: { type: String, required: true },
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },
  warrantyExpiry: { type: Date },
  invoicePath: { type: String },
  depreciation: { type: Number }
}, { timestamps: true });

module.exports = mongoose.model('Asset', assetSchema);