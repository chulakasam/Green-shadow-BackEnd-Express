import express from "express";
import {EquipmentAdd, EquipmentDelete, EquipmentGetAll, EquipmentUpdate} from "../database/prisma-equipment-data-store";

const router = express.Router();

router.post('/add',async (req, res) => {
    const equipment = req.body;
    try{
       const addEquipment=await EquipmentAdd(equipment);
       res.json(addEquipment);
    }catch (error){
        console.log('error saving equipment',error);
    }
});

router.delete('/delete/:equipmentId',async (req, res) => {
    const equipmentId = req.params.equipmentId;
    try {
        const deleteEquipment=await EquipmentDelete(equipmentId);
        res.json(deleteEquipment);
    }catch (error){
        console.log('error deleting equipment',error);
    }
});

router.get('/view',async (req, res) => {
    try {
        const equipmentDetails=await EquipmentGetAll();
        res.json(equipmentDetails);
    }catch (error){
        console.log('error fetching equipment',error);
    }
});

router.put('/update/:equipmentId',async (req, res) => {
    const equipmentId = req.params.equipmentId;
    const equipment = req.body;
    try{
       const updateEquipment=await EquipmentUpdate(equipmentId,equipment);
       res.json(updateEquipment);
    }catch (error){
        console.log('error updating equipment',error);
    }
});
export default router;