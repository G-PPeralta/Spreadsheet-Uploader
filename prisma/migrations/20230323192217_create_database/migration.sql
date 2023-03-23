-- CreateTable
CREATE TABLE "tb_pocos" (
    "id" SERIAL NOT NULL,
    "poco" TEXT NOT NULL,
    "cadastro" INTEGER NOT NULL,

    CONSTRAINT "tb_pocos_pkey" PRIMARY KEY ("id")
);
