import 'dotenv/config';

import express from 'express';
import cors from 'cors'; 
// import { connect } from 'mongoose';
import connectDB from './config/db.js';
import adminRouter from './routes/adminRoutes.js';
import blogRoutes from './routes/blogRoutes.js';

const app = express();
await connectDB();

// Middleware
app.use(cors());
app.use(express.json());


// Routes

app.get('/', (req, res) => {
  res.send('Welcome to the AiBlogger App Server!');
});
app.use('/api/admin', adminRouter);
app.use('/api/blog', blogRoutes)


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});