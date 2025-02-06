import {PrismaClient} from "@prisma/client";
import Crop from "../model/Crop";

const prisma = new PrismaClient();

export async function CropAdd(crop:Crop){
    try{
        const addedCrop=await prisma.crop.create({
            data:{
                cropId:crop.cropId,
                cropName:crop.cropName,
                cropImage:crop.cropImage,
                category:crop.category,
                season:crop.season,
                fieldCode:crop.fieldCode
            }
        });
        console.log('crop adding successfully:',addedCrop);
        return addedCrop;
    }catch (error){
        console.log('error crop saving....')
    }
}


export async function CropGetAll(){
    try {
        return  await prisma.crop.findMany();
    }catch (error) {
        console.log('error fetching crop data',error);
    }

}