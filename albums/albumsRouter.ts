import express, { Router,Request,Response } from "express";

const ambumRouter :Router = Router();

ambumRouter.get("/",(req:Request,res:Response)=>{
    res.json({
        msg:"From albums router",
        url:req.baseUrl,
        method:req.method
    })
})

export default ambumRouter;