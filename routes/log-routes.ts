import express from "express";
import {MonitoringLogAdd} from "../database/prisma-log-data-store";

const router = express.Router();

router.post('/add',async (req, res)=>{
    const log = req.body;
    try {
      const addLog = await MonitoringLogAdd(log);
      res.json(addLog);
    }catch (error){
        console.log('error saving monitoring log');
    }
})


export default router;