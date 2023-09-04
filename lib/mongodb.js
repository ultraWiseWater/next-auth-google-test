import mongoose from "mongoose";

export const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB 연결 성공");
  } catch (error) {
    console.log("MongoDB 연결 실패", error);
  }
};
