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