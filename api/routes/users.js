import express from "express";
import { updateUser,deleteUser,getUser,getUsers } from "../controller/userController.js";
import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/checkauthentication",verifyToken,(req,res,next)=>{
    res.send("Hello user, you are logged in");
})

// UPDATE
router.put("/:id", updateUser);

// DELETE

router.delete("/:id", deleteUser);

// GET
router.get("/:id", getUser);

// GET ALL

router.get("/", getUsers);


export default router;