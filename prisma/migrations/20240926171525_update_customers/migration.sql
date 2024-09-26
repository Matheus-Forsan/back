/*
  Warnings:

  - You are about to drop the `
` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "
";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Costumers" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "lastname" TEXT NOT NULL
);
