-- CreateTable
CREATE TABLE "Student" (
    "id" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "class" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "discounts" TEXT NOT NULL,
    "admDate" TEXT NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Student_number_key" ON "Student"("number");
