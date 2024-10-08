import { Test, TestingModule } from '@nestjs/testing';
import { PeliculaSalaService } from './pelicula-sala.service';

describe('PeliculaSalaService', () => {
  let service: PeliculaSalaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PeliculaSalaService],
    }).compile();

    service = module.get<PeliculaSalaService>(PeliculaSalaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
