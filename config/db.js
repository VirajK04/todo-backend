import mongoose , { connect } from "mongoose";

const db = process.env.MONGO_URI;

const connectDB = async () => {
    try {
        await connect(db);

        console.log("MongoDB is connected");
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

export default connectDB;