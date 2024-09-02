// a temp file for testing either mongodb is connected or not


const mongoose = require('mongoose');

const uri = process.env.MONGODB_URI; 

async function connectToDatabase() {
  try {
    await mongoose.connect(uri);
    console.log('Connected successfully to MongoDB');
  } catch (error) {
    console.error('Connection error:', error);
  }
}

connectToDatabase();
