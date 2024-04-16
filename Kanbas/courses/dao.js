import mongoose from "mongoose";
import courseModel from "./model.js";

export const findAllCourses = () => courseModel.find();
export const findCourseById = (id) => courseModel.findById(id);
export const findCourseByNumber = (number) => courseModel.findOne({ number: number })
export const createCourse = (course) => {
    course._id = new mongoose.Types.ObjectId()
    return courseModel.create(course)
};
export const deleteCourse = (id) => courseModel.deleteOne({ _id: id });
export const updateCourse = (id, course) =>
    courseModel.updateOne({ _id: id }, { $set: course });