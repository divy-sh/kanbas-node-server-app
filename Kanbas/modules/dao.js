import mongoose from "mongoose";
import moduleModel from "./model.js";

export const findAllModules = () => moduleModel.find();
export const findModuleById = (id) => moduleModel.findById(id);
export const findModuleByCourse = (course) => moduleModel.find({ course: course })
export const createModule = (module) => {
    module._id = new mongoose.Types.ObjectId()
    return moduleModel.create(module)
};
export const deleteModule = (id) => moduleModel.deleteOne({ _id: id });
export const updateModule = (id, module) =>
    moduleModel.updateOne({ _id: id }, { $set: module });