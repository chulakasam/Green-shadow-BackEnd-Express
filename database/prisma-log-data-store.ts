import {MonitoringLog, PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export async function MonitoringLogAdd(log:MonitoringLog) {
    try {
        const addedLog = await prisma.monitoringLog.create({
            data: {
                LogCode: log.LogCode,
                date: log.date,
                observation: log.observation,
                LogImage: log.LogImage
            }
        })
        console.log('Log added successfully', addedLog);
        return addedLog;
    }catch (error){
        console.log('error adding log',error);
    }
}