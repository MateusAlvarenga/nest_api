/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Usuarios` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Usuarios_name_key" ON "Usuarios"("name");
