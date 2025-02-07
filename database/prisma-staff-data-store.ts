import {PrismaClient} from "@prisma/client";
import Staff from "../model/Staff";

const prisma = new PrismaClient();

export async function StaffAdd(staff:Staff){
   try {
       const addedStaff = await prisma.staff.create({
           data: {
               staffId: staff.staffId,
               name: staff.name,
               position: staff.position,
               gender: staff.gender,
               joinedDate: staff.joinedDate,
               dob: staff.dob,
               contactNo: staff.contactNo,
               email: staff.email,
               address: staff.address,
               LicenseNo: staff.LicenseNo
           }
       });
       console.log('adding staff successfully', addedStaff);
       return addedStaff;
   }catch (error) {
       console.log('error saving staff',error);
   }
}

export async function StaffDelete(staffId:string){
     try{
         const deletedStaff=await prisma.staff.delete({
             where:{staffId:staffId}
         });
         console.log('staff deleted successfully',deletedStaff);
         return deletedStaff;
     }catch (error){
         console.log('error deleting staff',error);
     }

}

export async function StaffGetAll(){
   try{
       const staffDetails = await prisma.staff.findMany();
       return staffDetails;
   }catch (error) {
       console.log('error fetching staff',error);
   }
}

export async function StaffUpdate(staffId:string,staff:Staff){
    try {
        const updatedStaff=await prisma.staff.update({
            where:{staffId:staffId},
            data: {
                name: staff.name,
                position: staff.position,
                gender: staff.gender,
                joinedDate: staff.joinedDate,
                dob: staff.dob,
                contactNo: staff.contactNo,
                email: staff.email,
                address: staff.address,
                LicenseNo: staff.LicenseNo
            }
        });
        console.log('staff updated successfully',updatedStaff);
        return staff;
    }catch (error){
        console.log('error staff updating',error);
    }
}