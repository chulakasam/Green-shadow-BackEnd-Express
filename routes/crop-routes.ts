import express from "express";
import {CropAdd, CropGetAll} from "../database/prisma-crop-data-store";

const router = express.Router();
router.post('/add',async (req, res) => {
    const crop = req.body;
    try{
        const addCrop=await CropAdd(crop);
        res.json(addCrop);
    }catch{
        console.log('error adding crop...')
    }
});

router.get('/view',async (req, res) => {
    try{
        const cropDetails = await CropGetAll();
        res.json(cropDetails);

    }catch (error){
        console.log('error fetching crop details...',error);
    }

})
export default router;