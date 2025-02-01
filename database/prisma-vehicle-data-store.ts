import {PrismaClient} from "@prisma/client";
import Vehicle from "../model/Vehicle";

const prisma = new PrismaClient();

export async function VehicleAdd(vehicle:Vehicle) {
    try {
        const addedVehicle = await prisma.vehicle.create({
                data: {
                    LicenseNo: vehicle.LicenseNo,
                    VehicleCode: vehicle.VehicleCode,
                    Category: vehicle.Category,
                    Status: vehicle.Status,
                    FuelType: vehicle.FuelType,
                    Remark: vehicle.Remark
                }
            });
        console.log('vehicle Added :', addedVehicle);
        return addedVehicle;
        }catch (error){
           console.log('error saving vehicle',error);
        }
}


