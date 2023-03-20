import express, { Router,Request,Response } from "express";

const todosRouter :Router = Router();

todosRouter.get("/",(req:Request,res:Response)=>{
    res.json({
        msg:"From todos router",
        url:req.baseUrl,
        method:req.method
    })
})

export default todosRouter;