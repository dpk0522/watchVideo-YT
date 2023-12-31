import mongoose from "mongoose";   
import { DB_NAME } from "../constants.js";
 
//Note:> if DB PASSWord contain @ symbol ,use '%40' in place of @  
//setting up DATABASE CONNECTION
const connectDB = async () =>{
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)    // here connectioninstance is object
        console.log(`\MongoDB connected !! DB HOST : ${connectionInstance.connection.host}`);    //WE PROVIDE THE CONNECTION HOST 
    }catch(error){
        console.log("MONGODB connection error:" ,error);
        process.exit(1);
    }
}

export default connectDB;