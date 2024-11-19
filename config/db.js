const mongoose = require("mongoose");

// Replace this with your MongoDB URI
const MONGO_URI =
  "mongodb://arshad:123@cluster0-shard-00-00.cr7oo.mongodb.net:27017,cluster0-shard-00-01.cr7oo.mongodb.net:27017,cluster0-shard-00-02.cr7oo.mongodb.net:27017/?ssl=true&replicaSet=atlas-vokd2k-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0";

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
