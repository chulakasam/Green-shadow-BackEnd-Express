import {PrismaClient} from "@prisma/client";
import Field from "../model/Field";

const prisma = new PrismaClient();

export async function FieldAdd(field:Field){
    try {
        const newField=await prisma.field.create({
            data:{
                fieldCode:field.fieldCode,
                fieldName:field.fieldName,
                location:field.location,
                fieldSize:field.fieldSize,
                fieldImg01:field.fieldImg01,
                fieldImg02:field.fieldImg02
            }
        })
        console.log('Field Added :',newField)
        return newField
    }catch (error){
        console.log("error adding field", error);
    }
}


export async function FieldDelete(fieldCode:string){
    try {
        const deletedField=await prisma.field.delete({
          where:{fieldCode:fieldCode}
        });
        console.log('Customer deleted :',fieldCode);
        return deletedField;
    }catch (error){
        console.log("error deleting field", error);
    }
}

export async function FieldUpdate(fieldCode:string,field:Field){
    try{
        const updatedField=await prisma.field.update({
            where:{fieldCode:fieldCode},
            data:{
                fieldName:field.fieldName,
                location:field.location,
                fieldSize:field.fieldSize,
                fieldImg01:field.fieldImg01,
                fieldImg02:field.fieldImg02
            }
        })
        console.log('Field updated :',updatedField);
        return updatedField;
    }catch (error){
        console.log('error updating Field',error);
    }
}



export async function FieldGetAll(){
    try{
        return await prisma.field.findMany();

    }catch (error){
        console.log("error fetching data",error);
    }


}