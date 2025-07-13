// import mongoose from 'mongoose';
// // import mongoose from "mongoose";



// const connectDB = async () => {
//   try {
//       await mongoose.connect(`${process.env.MONGODB_URL}/quickblog`);
//     mongoose.connection.on("connected", () => {
//       console.log("MongoDB connection established successfully.");
//     });

    
//   } catch (error) {
//     console.error(`Error: ${error.message}`);
  
//   }
// }




// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.MANGODB_URL, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log(`MongoDB connected: ${conn.connection.host}`);
//   } catch (error) {
//     console.error('MongoDB connection FAILED:', error.message);
//     process.exit(1);
//   }
// };

// export default connectDB;

import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL);
    console.log(`✅ MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('❌ MongoDB connection FAILED:', error.message);
    process.exit(1);
  }
};

export default connectDB;

