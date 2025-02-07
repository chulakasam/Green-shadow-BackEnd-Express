import express from "express";
import {StaffAdd, StaffDelete, StaffGetAll, StaffUpdate} from "../database/prisma-staff-data-store";

const router = express.Router();

router.post('/add',async (req, res) => {
    const staff = req.body;
        try{
           const addStaff=await StaffAdd(staff);
           res.json(addStaff);
        }catch (error){
            console.log('error saving staff...',error);
        }
});

router.delete('/delete/:staffId',async (req, res) => {
    const staffId = req.params.staffId;
    try{
        const deletedStaff=await StaffDelete(staffId);
        res.json(deletedStaff);
    }catch (error) {
        console.log('error deleting staff',error);
    }
});

router.get('/view',async (req, res) => {
   try {
       const staffDetails=await StaffGetAll();
       res.json(staffDetails);
   }catch (error){
       console.log('error fetching staff details',error);
   }
});

router.put('/update/:staffId',async (req, res) => {
    const staffId = req.params.staffId;
    const staff = req.body;
    try{
        const updateStaff=await StaffUpdate(staffId,staff);
        res.json(updateStaff);
    }catch (error){
        console.log('error updating staff',error);
    }

});
export default router;