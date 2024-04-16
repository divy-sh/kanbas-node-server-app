import mongoose from "mongoose";

const moduleSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    description: String,
    course: String,
    lessons : [
      {
        id: String,
        description: String,
        name: String,
        module: String
      }
    ]
  },
  {
    collection: "modules",
  }
);

export default moduleSchema;