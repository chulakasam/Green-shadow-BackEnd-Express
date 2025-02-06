import express from "express";
import {CropAdd, CropDelete, CropGetAll, CropUpdate} from "../database/prisma-crop-data-store";

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

});

router.delete('/delete/:cropId',async (req, res) => {
    const cropId = req.params.cropId;

    try {
        const deleteCrop = await CropDelete(cropId);
        res.json(deleteCrop);
    }catch (error) {
        console.log('error deleting crop details....',error);
    }
});


router.put('/update/:cropId',async (req,res)=>{
    const cropId = req.params.cropId;
    const crop = req.body;
    try{
        const updateCrop = await CropUpdate(cropId,crop);
        res.json(updateCrop);
    }catch (error){
        console.log('error updating crop',error);
    }
})

export default router;