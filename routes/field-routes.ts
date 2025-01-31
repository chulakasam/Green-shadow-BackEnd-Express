import express from "express";
import {FieldAdd} from "../database/prisma-field-data-store";

const router = express.Router();


router.post('/add',async (req, res)=>{
    const field = req.body;
    try{
        const addField = await FieldAdd(field);
        res.json(addField);

    }catch (error){
        console.log('field adding failed !!!',error);
    }

});




export default router;
