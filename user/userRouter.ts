import express, { Router,Request,Response } from "express";
import jsonfile from 'jsonfile';
import path from "path";

const userRouter :Router = Router();

userRouter.get("/",(req:Request,res:Response)=>{
    const userjsonPath=path.join(__dirname,"..","data","users.json");
    try{
        jsonfile.readFile(userjsonPath,(err,obj)=>{
            if(err)console.error(err)
            res.json({data:obj})
        })
    }
    catch{
        res.status(500).json({
            msg:"server error",
            userjsonPath:userjsonPath
        })
    }
})

export default userRouter;