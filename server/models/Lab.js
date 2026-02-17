const mongoose = require("mongoose");

const labSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Lab title is required"],
      trim: true
    },
    department: {
      type: String,
      required: [true, "Department is required"],
      lowercase: true, // Automatically converts "Computer Science" to "computer science"
      trim: true       // Removes accidental spaces like "Computer Science "
    },
    description: {
      type: String,
      required: [true, "Lab description is required"],
    },
    image: {
      type: String,
      default: "" // Provides a fallback if no image is uploaded
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Lab", labSchema);