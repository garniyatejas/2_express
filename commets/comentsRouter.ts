import express, { Router,Request,Response } from "express";

const CommetsRouter :Router = Router();

CommetsRouter.get("/",(req:Request,res:Response)=>{
    res.json({
        msg:"From comets router",
        url:req.baseUrl,
        method:req.method
    })
})

export default CommetsRouter;