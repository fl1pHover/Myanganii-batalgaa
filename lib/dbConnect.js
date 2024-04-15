import mongoose from "mongoose";

const connectDB = async() => {
    if(mongoose.connections[0].readyState) {
        return true
    }
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('connect');
        return true
    } catch (error) {
        console.log(error);
        return false
    }
}

export default connectDB