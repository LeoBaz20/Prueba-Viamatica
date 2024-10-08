import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/entities/prismaClient';
import { CreateSalaDto } from 'src/dto/create-sala.dto';
import { UpdateSalaDto } from 'src/dto/update-sala.dto';

@Injectable()
export class SalaService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllSalas() {
    return await this.prisma.salaCine.findMany();
  }

  async getAllSalasCount() {
    const salas = await this.prisma.salaCine.findMany();
    return salas.length;
  }

  async getSalaById(id: number) {
    return await this.prisma.salaCine.findUnique({
      where: { id_sala: id },
    });
  }

  async createSala(createSalaDto: CreateSalaDto) {
    return await this.prisma.salaCine.create({
      data: createSalaDto,
    });
  }

  async updateSala(id: number, updateSalaDto: UpdateSalaDto) {
    return await this.prisma.salaCine.update({
      where: { id_sala: id },
      data: updateSalaDto,
    });
  }

  async deleteSala(id: number) {
    return await this.prisma.salaCine.update({
      where: { id_sala: id },
      data: { deleted: true },
    });
  }
}
