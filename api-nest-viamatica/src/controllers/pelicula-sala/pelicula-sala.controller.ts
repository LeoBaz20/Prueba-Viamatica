import {
  Controller,
  Get,
  Post,
  Param,
  Query,
  Body,
  HttpStatus,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
  ApiQuery,
} from '@nestjs/swagger';
import { PeliculaSalaService } from 'src/services/pelicula-sala/pelicula-sala.service';
import { CreatePeliculaSalaDto } from 'src/dto/create-pelicula-sala.dto';

@ApiTags('pelicula-sala')
@Controller('pelicula-sala')
export class PeliculaSalaController {
  constructor(private readonly peliculaSalaService: PeliculaSalaService) {}

  @Get('buscar/:nombrePelicula/:salaID')
  @ApiOperation({ summary: 'Obtener una película por nombre y sala ID' })
  @ApiParam({
    name: 'nombrePelicula',
    type: String,
    description: 'Nombre de la película',
  })
  @ApiParam({ name: 'salaID', type: String, description: 'ID de la sala' })
  @ApiResponse({ status: 200, description: 'Película encontrada' })
  @ApiResponse({ status: 404, description: 'Película no encontrada' })
  async getPeliculaByNombreSalaID(
    @Param('nombrePelicula') nombrePelicula: string,
    @Param('salaID') salaID: string,
  ) {
    try {
      const pelicula = await this.peliculaSalaService.getPeliculaByNombreID(
        nombrePelicula,
        Number(salaID),
      );
      if (pelicula) {
        return {
          statusCode: HttpStatus.OK,
          data: pelicula,
        };
      } else {
        return {
          statusCode: HttpStatus.NOT_FOUND,
          message: 'Película no encontrada',
        };
      }
    } catch (error) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: 'Error al obtener la película',
        error,
      };
    }
  }

  @Get('fecha/:fecha_publicacion')
  @ApiOperation({
    summary: 'Obtener el número de películas por fecha de publicación',
  })
  @ApiParam({
    name: 'fecha_publicacion',
    type: String,
    description: 'Fecha de publicación de la película',
  })
  @ApiResponse({
    status: 200,
    description: 'Cantidad de películas encontradas',
  })
  @ApiResponse({
    status: 500,
    description: 'Error al obtener la cantidad de películas',
  })
  async getPeliculaByFecha(
    @Param('fecha_publicacion') fecha_publicacion: string,
  ) {
    try {
      const count =
        await this.peliculaSalaService.getPeliculasByFecha(fecha_publicacion);
      return {
        statusCode: HttpStatus.OK,
        count,
      };
    } catch (error) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: 'Error al obtener la cantidad de películas',
        error,
      };
    }
  }

  @Get('sala-status')
  @ApiOperation({ summary: 'Obtener el estado de una sala por nombre' })
  @ApiQuery({
    name: 'nombreSala',
    type: String,
    description: 'Nombre de la sala',
  })
  @ApiResponse({ status: 200, description: 'Estado de la sala' })
  @ApiResponse({
    status: 500,
    description: 'Error al obtener la información de la sala',
  })
  async getStatusSala(@Query('nombreSala') nombreSala: string) {
    try {
      const result = await this.peliculaSalaService.getSalaStatus(nombreSala);
      return {
        statusCode: HttpStatus.OK,
        data: result,
      };
    } catch (error) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: 'Error al obtener la información de la sala',
        error,
      };
    }
  }

  @Get('salas-disponibles')
  @ApiOperation({ summary: 'Obtener las salas disponibles' })
  @ApiQuery({
    name: 'countOnly',
    type: String,
    required: false,
    description: 'Si es true, devuelve solo la cantidad de salas disponibles',
  })
  @ApiResponse({
    status: 200,
    description: 'Salas disponibles o la cantidad de salas disponibles',
  })
  @ApiResponse({
    status: 500,
    description: 'Error al obtener las salas disponibles',
  })
  async getSalasDisponibles(@Query('countOnly') countOnly: string) {
    try {
      const returnCountOnly = countOnly === 'true';
      const result =
        await this.peliculaSalaService.getSalasDisponibles(returnCountOnly);
      return {
        statusCode: HttpStatus.OK,
        data: returnCountOnly ? { count: result } : result,
      };
    } catch (error) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: 'Error al obtener las salas disponibles',
        error,
      };
    }
  }

  @Post()
  @ApiOperation({ summary: 'Crear una nueva relación Pelicula-Sala' })
  @ApiBody({ type: CreatePeliculaSalaDto })
  @ApiResponse({ status: 201, description: 'Pelicula-Sala creada' })
  @ApiResponse({
    status: 500,
    description: 'Error al crear la entrada de PeliculaSala',
  })
  async createPeliculaSala(
    @Body() createPeliculaSalaDto: CreatePeliculaSalaDto,
  ) {
    try {
      const nuevaPeliculaSala =
        await this.peliculaSalaService.createPeliculaSala(
          createPeliculaSalaDto,
        );
      return {
        statusCode: HttpStatus.CREATED,
        data: nuevaPeliculaSala,
      };
    } catch (error) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: 'Error al crear la entrada de PeliculaSala',
        error,
      };
    }
  }
}
