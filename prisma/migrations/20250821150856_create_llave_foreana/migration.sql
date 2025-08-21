-- CreateTable
CREATE TABLE `cars` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `model` VARCHAR(191) NOT NULL,
    `plate` VARCHAR(191) NOT NULL,
    `release_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_available` BOOLEAN NOT NULL DEFAULT true,
    `brand_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `cars` ADD CONSTRAINT `cars_brand_id_fkey` FOREIGN KEY (`brand_id`) REFERENCES `brands`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
