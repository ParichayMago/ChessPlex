/*
  Warnings:

  - Added the required column `username` to the `Player` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `tier` on the `Tournament` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Player" ADD COLUMN     "username" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Tournament" DROP COLUMN "tier",
ADD COLUMN     "tier" INTEGER NOT NULL;
