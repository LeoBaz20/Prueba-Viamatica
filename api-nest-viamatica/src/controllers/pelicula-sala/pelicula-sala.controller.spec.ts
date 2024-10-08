import { Test, TestingModule } from '@nestjs/testing';
import { PeliculaSalaController } from './pelicula-sala.controller';

describe('PeliculaSalaController', () => {
  let controller: PeliculaSalaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PeliculaSalaController],
    }).compile();

    controller = module.get<PeliculaSalaController>(PeliculaSalaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
