import express from "express";

const router = express.Router();

router.get("/",(req,res)=>{
    res.send("This is auth");
});

router.get("/register",(req,res)=>{
    res.send("This is register endpoint");
});




export default router;