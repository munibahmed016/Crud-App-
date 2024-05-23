import mongoose from "mongoose";

const connectMongoDB = async () =>{
    if (mongoose.connections[0].readyState){
        return true;
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("connected to mongoDB");
    } catch (error) {
        console.log("this iserror===============>",error);
    }
};

export default connectMongoDB();