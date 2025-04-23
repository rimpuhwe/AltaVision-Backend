/* i will first plugging our apps to the database , once the app is started  our database will be swiched on too.
 if  failed to connect it exit immediately
*/

import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);// Mongo_URI is just  a palceholder , add up a link after seting up the environment 
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); 
  }
};

export default connectDB;
