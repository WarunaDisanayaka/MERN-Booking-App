import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import roomsRoute from "./routes/rooms.js";
import hotelsRoute from "./routes/hotels.js";
const app = express();
dotenv.config();

// MongoDB Connection
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB...");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected",()=>{
    console.log("Mongodb Disconnected");
})

mongoose.connection.on("connected",()=>{
    console.log("Mongodb connected!");
})


// Middleware
app.use("/api/auth",authRoute);
app.use("/api/users",usersRoute);
app.use("/api/hotels",hotelsRoute);
app.use("/api/rooms",roomsRoute);

// app.get("/",(req,res)=>{
//     res.send("Hello first");
// });


app.listen(8800, () => {
  connect();
  console.log("Connected to backend");
});
