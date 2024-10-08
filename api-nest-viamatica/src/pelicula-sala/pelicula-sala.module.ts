import { Module } from '@nestjs/common';
import { PeliculaSalaController } from 'src/controllers/pelicula-sala/pelicula-sala.controller';
import { PeliculaSalaService } from 'src/services/pelicula-sala/pelicula-sala.service';
import { PrismaService } from 'src/entities/prismaClient';

@Module({
  controllers: [PeliculaSalaController],
  providers: [PeliculaSalaService, PrismaService],
})
export class PeliculaSalaModule {}
