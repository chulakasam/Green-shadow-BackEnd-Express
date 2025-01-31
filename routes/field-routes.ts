import express from "express";
import {FieldAdd, FieldDelete} from "../database/prisma-field-data-store";

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

router.delete('/delete/:fieldCode',async (req, res)=>{
    const fieldCode:string =req.params.fieldCode;
    try{
        const deletedField = await FieldDelete(fieldCode);
        res.json(deletedField);
    }catch (error){
        console.log("error deleting field",error);
    }
})



export default router;
