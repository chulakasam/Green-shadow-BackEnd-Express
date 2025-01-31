import express from "express";
import {FieldAdd, FieldDelete, FieldGetAll, FieldUpdate} from "../database/prisma-field-data-store";
import Field from "../model/Field";

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

router.put('/update/:fieldCode',async (req, res)=>{
    const fieldCode:string = req.params.fieldCode;
    const field:Field = req.body;

    try{
        const updatedItem = await FieldUpdate(fieldCode,field);
        res.json(updatedItem);
    }catch(err){
        console.log("error updating item", err);
    }
})

router.get('/view',async (req, res) => {

    try{
        const field_detail = await FieldGetAll();
        res.json(field_detail);
    }catch (error){
        console.log("error fetching  field data",error);
    }
})


export default router;
