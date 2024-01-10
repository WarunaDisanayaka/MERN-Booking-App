import express from "express";
import { createRoom,updateRoom,deleteRoom,getRoom,getRooms } from "../controller/roomController.js";
import { verifyAdmin, verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

// Create
router.post("/:hotelid",verifyAdmin,createRoom);

// Update
router.put("/:id",verifyAdmin,updateRoom);

// Delete
router.delete("/:id",verifyAdmin,deleteRoom);

// Get one room
router.get("/:id",getRoom);

// Get rooms
router.get("/",getRooms);


export default router;