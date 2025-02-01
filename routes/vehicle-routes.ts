import express from "express";
import {DeleteVehicle, VehicleAdd} from "../database/prisma-vehicle-data-store";

const router = express.Router();

router.post('/add',async (req, res)=>{
    const newVehicle = req.body;
    try{
        const addVehicle = await VehicleAdd(newVehicle);
        res.json(addVehicle);
    }catch (error){
        console.log('error saving vehicle',error);
    }
});

router.delete('/delete/:LicenseNo',async (req, res) => {
    const licenseNo = req.params.LicenseNo;
    try{
        const deleteVehicle = await DeleteVehicle(licenseNo);
        res.json(deleteVehicle);
    }catch (error){
        console.log('error deleting vehicle',error);
    }


})










export default router;