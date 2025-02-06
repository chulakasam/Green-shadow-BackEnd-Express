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

export async function CropDelete(cropId:string){
    try {
        const deletedCrop=await prisma.crop.delete({
            where:{cropId:cropId}
        });
        console.log('crop deleted successfully',deletedCrop);
        return deletedCrop;
    }catch (error){
        console.log('error deleting crop',error);
    }
}

export async function CropUpdate(cropId:string,crop:Crop){
    try {
        const updatedCrop=await prisma.crop.update({
            where:{cropId:cropId},
            data:{
                cropName:crop.cropName,
                cropImage:crop.cropImage,
                category:crop.category,
                season:crop.season,
                fieldCode:crop.fieldCode
            }
        });
        console.log('crop updated',updatedCrop);
        return updatedCrop;
    }catch (error){
        console.log('error updating crop',error);
    }
}
