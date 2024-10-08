import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/entities/prismaClient';
import { CreatePeliculaDto } from 'src/dto/create-pelicula.dto';
import { UpdatePeliculaDto } from 'src/dto/update-pelicula.dto';

@Injectable()
export class PeliculaService {
  private prisma = new PrismaService();

  async getAllPeliculas() {
    return await this.prisma.pelicula.findMany();
  }

  async getAllPeliculasCount() {
    const peliculas = await this.prisma.pelicula.findMany();
    return peliculas.length;
  }

  async getPeliculaById(id: number) {
    return await this.prisma.pelicula.findUnique({
      where: { id_pelicula: id },
    });
  }

  async createPelicula(createPeliculaDto: CreatePeliculaDto) {
    return await this.prisma.pelicula.create({
      data: createPeliculaDto,
    });
  }

  async updatePelicula(id: number, updatePeliculaDto: UpdatePeliculaDto) {
    return await this.prisma.pelicula.update({
      where: { id_pelicula: id },
      data: updatePeliculaDto,
    });
  }

  async deletePelicula(id: number) {
    return await this.prisma.pelicula.update({
      where: { id_pelicula: id },
      data: { deleted: true },
    });
  }
}
