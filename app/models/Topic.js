const mongoose = require("mongoose");

const { Schema } = mongoose;

const Topic = new Schema(
  {
    title: { type: String, required: true },
    description: String,
    url: String,
    status: Number,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Topic", Topic);
