import { Module } from '@nestjs/common';
import { PeliculasModule } from './peliculas/peliculas.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from './repository/loggin.interceptor';
import { SalasModule } from './salas/salas.module';
import { PrismaService } from './entities/prismaClient';
import { PeliculaSalaModule } from './pelicula-sala/pelicula-sala.module';
import { PeliculaSalaController } from './controllers/pelicula-sala/pelicula-sala.controller';
import { PeliculaSalaService } from './services/pelicula-sala/pelicula-sala.service';

@Module({
  imports: [PeliculasModule, SalasModule, PeliculaSalaModule],
  controllers: [PeliculaSalaController],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
    PrismaService,
    PeliculaSalaService,
  ],
})
export class AppModule {}
