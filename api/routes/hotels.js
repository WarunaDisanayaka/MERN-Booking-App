import express from "express";
import { createHotel } from "../controller/hotelController.js";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";

const router = express.Router();

// CREATE
router.post("/", createHotel);

// UPDATE
router.put("/:id", async (req, res) => {
  
});

// DELETE

router.delete("/:id", async (req, res) => {
  
});

// GET
router.get("/:id", async (req, res) => {
 
});

// GET ALL

router.get("/", async (req, res, next) => {
//   const failed = true;

//   if (failed) {
//     return next(createError(404, "You are not authenticated"));
//   }

 
});

export default router;
