const mongoose = require("mongoose");

const coursesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Course name is required"],
    },
    description: {
      type: String,
      trim: true,
      required: [true, "Course description is required"],
    },
    duration: {
      type: String,
      trim: true,
      required: [true, "Please mention the duration"],
    },
    price: {
      type: String,
      trim: true,
      required: [true, "Please mention the price"],
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

const Course = mongoose.model("Course", coursesSchema);

module.exports = Course;
