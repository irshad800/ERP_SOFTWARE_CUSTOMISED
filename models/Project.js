const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  tasks: [{
    description: String,
    assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },
    status: { type: String, enum: ['pending', 'inprogress', 'completed'] },
    logs: [{ date: Date, note: String }]
  }]
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);