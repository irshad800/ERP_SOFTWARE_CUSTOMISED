const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const employeeRoutes = require('./routes/employees');
const payrollRoutes = require('./routes/payroll');
const attendanceRoutes = require('./routes/attendance');
const leaveRoutes = require('./routes/leaves');
const essRoutes = require('./routes/ess');
const recruitmentRoutes = require('./routes/recruitment');
const performanceRoutes = require('./routes/performance');
const proVisaRoutes = require('./routes/proVisa');
const assetRoutes = require('./routes/assets');
const projectRoutes = require('./routes/projects');
const analyticsRoutes = require('./routes/analytics');
const notificationRoutes = require('./routes/notifications');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use('/api/auth', authRoutes);
app.use('/api/employees', employeeRoutes);
app.use('/api/payroll', payrollRoutes);
app.use('/api/attendance', attendanceRoutes);
app.use('/api/leaves', leaveRoutes);
app.use('/api/ess', essRoutes);
app.use('/api/recruitment', recruitmentRoutes);
app.use('/api/performance', performanceRoutes);
app.use('/api/provisa', proVisaRoutes);
app.use('/api/assets', assetRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/notifications', notificationRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));