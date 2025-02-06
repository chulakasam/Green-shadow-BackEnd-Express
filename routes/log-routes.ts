import express from "express";
import {MonitoringLogAdd, MonitoringLogDelete} from "../database/prisma-log-data-store";

const router = express.Router();

router.post('/add',async (req, res)=>{
    const log = req.body;
    try {
      const addLog = await MonitoringLogAdd(log);
      res.json(addLog);
    }catch (error){
        console.log('error saving monitoring log');
    }
});

router.delete('/delete/:LogCode',async (req, res)=>{
    const LogCode = req.params.LogCode;
    try {
        const deleteLog = await MonitoringLogDelete(LogCode);
        res.json(deleteLog);
    }catch (error) {
        console.log('error deleting log',error);
    }

});


export default router;