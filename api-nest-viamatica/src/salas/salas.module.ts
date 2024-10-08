import { Module } from '@nestjs/common';
import { SalasController } from 'src/controllers/salas/salas.controller';
import { SalaService } from 'src/services/salas/salas.service';
import { PrismaService } from 'src/entities/prismaClient';

@Module({
  controllers: [SalasController],
  providers: [SalaService, PrismaService],
})
export class SalasModule {}
