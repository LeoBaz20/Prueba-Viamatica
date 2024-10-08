import { Module } from '@nestjs/common';
import { PeliculasController } from 'src/controllers/peliculas/peliculas.controller';
import { PeliculaService } from 'src/services/peliculas/peliculas.service';

@Module({
  controllers: [PeliculasController],
  providers: [PeliculaService],
})
export class PeliculasModule {}
