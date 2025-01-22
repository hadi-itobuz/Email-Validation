import express from 'express';
import 'dotenv/config'
import bodyParser from 'body-parser';
import route from './routes/verificationRouter.js';
const app=express();
app.use('/verify',route);
app.use(express.json());
const port=process.env.PORT;
app.listen(port,()=>{
    console.log("Server is running at port:",port);
})