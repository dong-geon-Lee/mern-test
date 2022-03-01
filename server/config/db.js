const mongoose = require("mongoose");

const connectedDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`${conn.connection.host} - MongoDB connected...`);
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = { connectedDB };
