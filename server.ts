import express ,{Application,Request,Response} from 'express'
import CommetsRouter from './commets/comentsRouter';
import albumRouter from './albums/albumsRouter';
import todosRouter from './todos/todosRouter';
import postRouter from './post/postRouter';
import userRouter from './user/userRouter';

const app:express.Application = express()

const hostname :string = "127.0.0.1";
const port:number = 8080;

app.get("/",(req:Request,res:Response)=>{
    // res.status(200);
    res.json({msg:"Welcome to express home page"})
})
//Router Configuration
app.use("/api/comments",CommetsRouter);
app.use("/api/albums",albumRouter);
app.use("/api/todos",todosRouter);
app.use("/api/post",postRouter);
app.use("/api/user",userRouter);

app.listen(port,hostname,()=>{
    console.log(`Server started at http://${hostname}:${port}`);
});