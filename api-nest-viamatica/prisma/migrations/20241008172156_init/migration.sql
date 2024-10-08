-- CreateTable
CREATE TABLE "Pelicula" (
    "id_pelicula" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "duracion" INTEGER NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Pelicula_pkey" PRIMARY KEY ("id_pelicula")
);

-- CreateTable
CREATE TABLE "SalaCine" (
    "id_sala" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "estado" TEXT NOT NULL DEFAULT 'Disponible',
    "deleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "SalaCine_pkey" PRIMARY KEY ("id_sala")
);

-- CreateTable
CREATE TABLE "PeliculaSala" (
    "id_pelicula_sala" SERIAL NOT NULL,
    "id_pelicula" INTEGER NOT NULL,
    "id_sala_cine" INTEGER NOT NULL,
    "fecha_publicacion" TIMESTAMP(3) NOT NULL,
    "fecha_fin" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PeliculaSala_pkey" PRIMARY KEY ("id_pelicula_sala")
);

-- CreateIndex
CREATE UNIQUE INDEX "PeliculaSala_id_pelicula_id_sala_cine_key" ON "PeliculaSala"("id_pelicula", "id_sala_cine");

-- AddForeignKey
ALTER TABLE "PeliculaSala" ADD CONSTRAINT "PeliculaSala_id_pelicula_fkey" FOREIGN KEY ("id_pelicula") REFERENCES "Pelicula"("id_pelicula") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PeliculaSala" ADD CONSTRAINT "PeliculaSala_id_sala_cine_fkey" FOREIGN KEY ("id_sala_cine") REFERENCES "SalaCine"("id_sala") ON DELETE RESTRICT ON UPDATE CASCADE;
