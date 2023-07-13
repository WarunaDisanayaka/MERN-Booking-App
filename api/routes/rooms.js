import express from "express";
import { createRoom,updateRoom,deleteRoom,getRoom,getRooms } from "../controller/roomController.js";
import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

// Create
router.post("/:hotelid",verifyToken,createRoom);

// Update
router.put("/:id",verifyToken,updateRoom);

// Delete
router.delete("/:id",verifyToken,deleteRoom);

// Get one room
router.get("/:id",getRoom);

// Get rooms
router.get("/",getRooms);


export default router;