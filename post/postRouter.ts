import express, { Router,Request,Response } from "express";

const postRouter :Router = Router();

postRouter.get("/",(req:Request,res:Response)=>{
    res.json({
        msg:"From post router",
        url:req.baseUrl,
        method:req.method
    })
})

export default postRouter;