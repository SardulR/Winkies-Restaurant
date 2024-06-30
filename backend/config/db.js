import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('MONGODB DATABASE URL').then(()=>console.log("DataBase Connected"));
}