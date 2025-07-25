
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on('connected', () => console.log('Connected to MongoDB')
    );
    await mongoose.connect(`${process.env.MONGODB_URI}/qucikblog`);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

export default connectDB;
