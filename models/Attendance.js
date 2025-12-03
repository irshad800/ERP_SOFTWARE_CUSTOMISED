const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
  employee: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee', required: true },
  date: { type: Date, required: true },
  checkIn: { type: Date },
  checkOut: { type: Date },
  location: { type: String },
  method: { type: String, enum: ['biometric', 'gps', 'qr'] },
  overtime: { type: Number },
  late: { type: Boolean },
  earlyOut: { type: Boolean }
}, { timestamps: true });

module.exports = mongoose.model('Attendance', attendanceSchema);