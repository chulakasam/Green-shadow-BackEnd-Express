-- CreateTable
CREATE TABLE `Field` (
    `fieldCode` VARCHAR(191) NOT NULL,
    `fieldName` VARCHAR(191) NOT NULL,
    `location` VARCHAR(191) NOT NULL,
    `fieldSize` INTEGER NOT NULL,
    `fieldImg01` VARCHAR(191) NOT NULL,
    `fieldImg02` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`fieldCode`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Vehicle` (
    `LicenseNo` VARCHAR(191) NOT NULL,
    `VehicleCode` VARCHAR(191) NOT NULL,
    `Category` VARCHAR(191) NOT NULL,
    `Status` VARCHAR(191) NOT NULL,
    `FuelType` VARCHAR(191) NOT NULL,
    `Remark` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Vehicle_VehicleCode_key`(`VehicleCode`),
    PRIMARY KEY (`LicenseNo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MonitoringLog` (
    `LogCode` VARCHAR(191) NOT NULL,
    `date` VARCHAR(191) NOT NULL,
    `observation` VARCHAR(191) NOT NULL,
    `LogImage` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`LogCode`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Crop` (
    `cropId` VARCHAR(191) NOT NULL,
    `cropName` VARCHAR(191) NOT NULL,
    `cropImage` VARCHAR(191) NOT NULL,
    `category` VARCHAR(191) NOT NULL,
    `season` VARCHAR(191) NOT NULL,
    `fieldCode` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`cropId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Crop` ADD CONSTRAINT `Crop_fieldCode_fkey` FOREIGN KEY (`fieldCode`) REFERENCES `Field`(`fieldCode`) ON DELETE CASCADE ON UPDATE CASCADE;
