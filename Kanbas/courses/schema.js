import mongoose from "mongoose";

const courseSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    number: { type: String, required: true , unique: true},
    department: String,
    credits: String,
    description: String,
    startDate: Date,
    endDate: Date,
    image: String,
  },
  {
    collection: "courses",
  }
);

export default courseSchema;