import dotenv from "dotenv"
import connectDB from "./db/index.js"  // importing DATABASE

dotenv.config({
    path:'./env'   //path of .env file 
})


connectDB()  //calling database connection 

