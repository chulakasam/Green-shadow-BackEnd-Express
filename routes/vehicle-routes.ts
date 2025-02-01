import express from "express";
import {VehicleAdd} from "../database/prisma-vehicle-data-store";

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

router.delete('/delete/:LicenseNo',(req, res) => {
    const licenseNo = req.params.LicenseNo;

})










export default router;