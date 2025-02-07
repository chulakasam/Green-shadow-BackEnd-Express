import {PrismaClient} from "@prisma/client";
import Equipment from "../model/Equipment";
import {checkServerIdentity} from "tls";

const prisma = new PrismaClient();

export async function EquipmentAdd(equipment:Equipment){
    try {
        const addedEquipment = await prisma.equipment.create({
            data: {
                equipmentId: equipment.equipmentId,
                equipmentName: equipment.equipmentName,
                equipmentType: equipment.equipmentType,
                equipmentStatus: equipment.equipmentStatus,
                staffId: equipment.staffId,
                fieldCode: equipment.fieldCode
            }
        });
        console.log('equipment added successfully',addedEquipment);
        return addedEquipment;
    }catch (error){
        console.log('error adding equipment',error);
    }
}

export async function EquipmentDelete(equipmentId:string){
    try {
        const deleteEquipment=await prisma.equipment.delete({
            where:{equipmentId:equipmentId}
        });
        console.log('equipment deleted successfully',deleteEquipment);
        return deleteEquipment;
    }catch (error){
        console.log('error equipment deleting',error);
    }
}

export async function EquipmentGetAll(){
    try{
        const equipmentDetails = await prisma.equipment.findMany();
        console.log('fetching data successfully');
        return equipmentDetails;
    }catch (error) {
        console.log('error fetching equipment',error);
    }
}

export async function EquipmentUpdate(equipmentId:string,equipment:Equipment){
    try {
        const updateEquipment=await prisma.equipment.update({
            where:{equipmentId:equipmentId},
            data:{
                equipmentName: equipment.equipmentName,
                equipmentType: equipment.equipmentType,
                equipmentStatus: equipment.equipmentStatus,
                staffId: equipment.staffId,
                fieldCode: equipment.fieldCode
            }
        });
        console.log('equipment updated successfully',updateEquipment);
        return updateEquipment;
    }catch (error) {
        console.log('error equipment updating',error);
    }
}