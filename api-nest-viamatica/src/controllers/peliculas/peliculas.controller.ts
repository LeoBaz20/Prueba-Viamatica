import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { PeliculaService } from 'src/services/peliculas/peliculas.service';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';
import { CreatePeliculaDto } from 'src/dto/create-pelicula.dto';
import { UpdatePeliculaDto } from 'src/dto/update-pelicula.dto';

@ApiTags('peliculas')
@Controller('peliculas')
export class PeliculasController {
  constructor(private readonly peliculaService: PeliculaService) {}

  @Get()
  @ApiOperation({ summary: 'Obtener todas las películas' })
  @ApiResponse({ status: 200, description: 'Lista de todas las películas' })
  async getAllPeliculas() {
    return await this.peliculaService.getAllPeliculas();
  }

  @Get('count')
  @ApiOperation({ summary: 'Obtener la cantidad de películas' })
  @ApiResponse({ status: 200, description: 'Cantidad de películas' })
  async getAllPeliculasCount() {
    return await this.peliculaService.getAllPeliculasCount();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una película por ID' })
  @ApiParam({ name: 'id', type: String, description: 'ID de la película' })
  @ApiResponse({ status: 200, description: 'Película encontrada' })
  @ApiResponse({ status: 404, description: 'Película no encontrada' })
  async getPeliculaById(@Param('id') id: string) {
    return await this.peliculaService.getPeliculaById(Number(id));
  }

  @Post()
  @ApiOperation({ summary: 'Crear una nueva película' })
  @ApiBody({ type: CreatePeliculaDto })
  @ApiResponse({ status: 201, description: 'Película creada' })
  @ApiResponse({ status: 400, description: 'Datos inválidos' })
  async createPelicula(@Body() createPeliculaDto: CreatePeliculaDto) {
    return await this.peliculaService.createPelicula(createPeliculaDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar una película por ID' })
  @ApiParam({ name: 'id', type: String, description: 'ID de la película' })
  @ApiBody({ type: UpdatePeliculaDto })
  @ApiResponse({ status: 200, description: 'Película actualizada' })
  @ApiResponse({ status: 404, description: 'Película no encontrada' })
  async updatePelicula(
    @Param('id') id: string,
    @Body() updatePeliculaDto: UpdatePeliculaDto,
  ) {
    return await this.peliculaService.updatePelicula(
      Number(id),
      updatePeliculaDto,
    );
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar una película por ID' })
  @ApiParam({ name: 'id', type: String, description: 'ID de la película' })
  @ApiResponse({ status: 200, description: 'Película eliminada' })
  @ApiResponse({ status: 404, description: 'Película no encontrada' })
  async deletePelicula(@Param('id') id: string) {
    return await this.peliculaService.deletePelicula(Number(id));
  }
}
