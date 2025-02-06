import express from "express";
import {CropAdd} from "../database/prisma-crop-data-store";

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
export default router;