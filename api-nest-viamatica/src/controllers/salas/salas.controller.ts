import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { SalaService } from 'src/services/salas/salas.service';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';
import { CreateSalaDto } from 'src/dto/create-sala.dto';
import { UpdateSalaDto } from 'src/dto/update-sala.dto';

@ApiTags('salas')
@Controller('salas')
export class SalasController {
  constructor(private readonly salaService: SalaService) {}

  @Get()
  @ApiOperation({ summary: 'Obtener todas las salas' })
  @ApiResponse({ status: 200, description: 'Lista de todas las salas' })
  async getAllSalas() {
    return await this.salaService.getAllSalas();
  }

  @Get('count')
  @ApiOperation({ summary: 'Obtener la cantidad de salas' })
  @ApiResponse({ status: 200, description: 'Cantidad de salas' })
  async getAllSalasCount() {
    return await this.salaService.getAllSalasCount();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una sala por ID' })
  @ApiParam({ name: 'id', type: String, description: 'ID de la sala' })
  @ApiResponse({ status: 200, description: 'Sala encontrada' })
  @ApiResponse({ status: 404, description: 'Sala no encontrada' })
  async getSalaById(@Param('id') id: string) {
    return await this.salaService.getSalaById(Number(id));
  }

  @Post()
  @ApiOperation({ summary: 'Crear una nueva sala' })
  @ApiBody({ type: CreateSalaDto })
  @ApiResponse({ status: 201, description: 'Sala creada' })
  @ApiResponse({ status: 400, description: 'Datos inválidos' })
  async createSala(@Body() createSalaDto: CreateSalaDto) {
    return await this.salaService.createSala(createSalaDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar una sala por ID' })
  @ApiParam({ name: 'id', type: String, description: 'ID de la sala' })
  @ApiBody({ type: UpdateSalaDto })
  @ApiResponse({ status: 200, description: 'Sala actualizada' })
  @ApiResponse({ status: 404, description: 'Sala no encontrada' })
  async updateSala(
    @Param('id') id: string,
    @Body() updateSalaDto: UpdateSalaDto,
  ) {
    return await this.salaService.updateSala(Number(id), updateSalaDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar una sala por ID' })
  @ApiParam({ name: 'id', type: String, description: 'ID de la sala' })
  @ApiResponse({ status: 200, description: 'Sala eliminada' })
  @ApiResponse({ status: 404, description: 'Sala no encontrada' })
  async deleteSala(@Param('id') id: string) {
    return await this.salaService.deleteSala(Number(id));
  }
}
