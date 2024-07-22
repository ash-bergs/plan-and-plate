-- CreateEnum
CREATE TYPE "Category" AS ENUM ('BREAKFAST', 'LUNCH', 'DINNER', 'SNACK', 'DESSERT', 'BULK');

-- AlterTable
ALTER TABLE "Recipe" ADD COLUMN     "category" "Category",
ADD COLUMN     "cuisine" TEXT,
ADD COLUMN     "draft" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "servingSize" INTEGER;
