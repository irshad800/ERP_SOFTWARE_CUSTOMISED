const mongoose = require('mongoose');

const payrollSchema = new mongoose.Schema({
  employee: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee', required: true },
  month: { type: Date, required: true },
  basicSalary: { type: Number, required: true },
  allowances: { type: Number },
  deductions: { type: Number },
  overtime: { type: Number },
  netSalary: { type: Number },
  gratuity: { type: Number },
  currency: { type: String, default: 'AED' },
  payslipPath: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Payroll', payrollSchema);