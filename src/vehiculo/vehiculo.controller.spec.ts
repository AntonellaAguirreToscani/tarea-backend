import { Test, TestingModule } from '@nestjs/testing';
import { VehiculoController } from './vehiculo.controller';

describe('VehiculoController', () => {
  let controller: VehiculoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VehiculoController],
    }).compile();

    controller = module.get<VehiculoController>(VehiculoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
