const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    contact: {
      type: String,
      required: true,
    },
    rollNumber: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    degree: {
      type: String,
      required: true,
    },
    aboutProject: {
      type: String,
    },
    hobbies: {
      type: String,
    },
    certificate: {
      type: String,
    },
    internship: {
      type: String,
    },
    aim: {
      type: String,
    },
    profileImage: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Member', memberSchema);
