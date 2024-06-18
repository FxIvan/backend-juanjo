const mongoose = require("mongoose");

const connectDB = async (uri) => {
  try {
    const options = {
      useNewUrlParser: true,
    };

    const conn = await mongoose.connect(
      "mongodb://mongo:27017/docker-db",
      options
    );

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(err.message);
    process.exit();
  }
};

module.exports = connectDB;
