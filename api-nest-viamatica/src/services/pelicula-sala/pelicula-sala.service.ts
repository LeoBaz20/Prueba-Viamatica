import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/entities/prismaClient';
import { CreatePeliculaSalaDto } from 'src/dto/create-pelicula-sala.dto';

@Injectable()
export class PeliculaSalaService {
  constructor(private readonly prisma: PrismaService) {}

  async getPeliculaByNombreID(nombrePelicula: string, salaID: number) {
    try {
      return await this.prisma.pelicula.findFirst({
        where: {
          nombre: nombrePelicula,
          pelicula_sala: {
            some: {
              id_sala_cine: salaID,
            },
          },
        },
        include: {
          pelicula_sala: true,
        },
      });
    } catch (error) {
      console.error('Error obteniendo pelicula:', error);
      throw error;
    }
  }

  async getPeliculasByFecha(fecha_publicacion: string) {
    try {
      return await this.prisma.peliculaSala.count({
        where: {
          fecha_publicacion: new Date(fecha_publicacion),
        },
      });
    } catch (error) {
      console.error('Error obteniendo número de peliculas:', error);
      throw error;
    }
  }

  async getSalaStatus(nombreSala: string) {
    try {
      const sala = await this.prisma.salaCine.findFirst({
        where: {
          nombre: nombreSala,
        },
        include: {
          pelicula_sala: true,
        },
      });

      if (!sala) {
        throw new Error('Sala no encontrada');
      }

      const peliculaCount = sala.pelicula_sala.length;

      if (peliculaCount < 3) {
        return { message: 'Sala disponible' };
      } else if (peliculaCount >= 3 && peliculaCount <= 5) {
        return { message: `Sala con ${peliculaCount} películas asignadas` };
      } else {
        return { message: 'Sala no disponible' };
      }
    } catch (error) {
      console.error('Error al obtener salas:', error);
      throw error;
    }
  }

  async getSalasDisponibles(returnCountOnly = false) {
    try {
      const salas = await this.prisma.salaCine.findMany({
        include: {
          pelicula_sala: true,
        },
      });

      const availableSalas = salas.filter(
        (sala) => sala.pelicula_sala.length <= 5,
      );

      if (returnCountOnly) {
        return availableSalas.length;
      }

      return availableSalas;
    } catch (error) {
      console.error('Error al obtener salas disponibles:', error);
      throw error;
    }
  }

  async createPeliculaSala(createPeliculaSalaDto: CreatePeliculaSalaDto) {
    try {
      const { id_pelicula, id_sala_cine, fecha_publicacion, fecha_fin } =
        createPeliculaSalaDto;

      const sala = await this.prisma.salaCine.findFirst({
        where: {
          id_sala: id_sala_cine,
        },
        include: {
          pelicula_sala: true,
        },
      });

      if (!sala) {
        throw new Error('Sala no encontrada');
      }

      if (sala.pelicula_sala.length >= 5) {
        throw new Error('La sala ya tiene el máximo de 5 películas asignadas');
      }

      return await this.prisma.peliculaSala.create({
        data: {
          id_pelicula,
          id_sala_cine,
          fecha_publicacion: new Date(fecha_publicacion),
          fecha_fin: new Date(fecha_fin),
        },
      });
    } catch (error) {
      console.error('Error al crear la entrada de PeliculaSala:', error);
      throw error;
    }
  }
}
