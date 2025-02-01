import express from "express";
import {DeleteVehicle, GetAllVehicle, UpdateVehicle, VehicleAdd} from "../database/prisma-vehicle-data-store";
import Vehicle from "../model/Vehicle";

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
});

router.get('/view',async (req,res)=>{
    try{
        const getAllVehicle = await GetAllVehicle();
        res.json(getAllVehicle);
    }catch (error){
        console.log('error fetching data',error);
    }
});

router.put('/update/:LicenseNo',async (req, res)=>{
    const licenseNo = req.params.LicenseNo;
    const vehicle:Vehicle=req.body;
    try {
        const updateVehicle = await UpdateVehicle(licenseNo,vehicle);
        res.json(updateVehicle);
    }catch (error){
        console.log('error update vehicle');
    }
});













export default router;