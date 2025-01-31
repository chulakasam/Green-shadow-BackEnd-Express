import express from 'express';
import fieldRoutes from "./routes/field-routes";

const app=express();
app.use(express.json());
app.use('/',(req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, content-type');

    next();
})

app.use('/field',fieldRoutes);
app.listen('3000',()=>{
    console.log('server running in port 3000')
})
app.use('/',(req,res,next)=>{
    res.status(200).send('Not Found');
})