import { Test } from '@nestjs/testing';
import { Observable } from 'rxjs';
import { CovidController } from './covid.controller';
import { CovidService } from './covid.service';
import { Cat } from './interfaces/covid.interface';

describe('CovidController', () => {
  let covidController: CovidController;
  let covidService: CovidService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [CovidController],
      providers: [CovidService],
    }).compile();

    covidService = moduleRef.get<CovidService>(CovidService);
    covidController = moduleRef.get<CovidController>(CovidController);
  });

  describe('getStates', () => {
    it('should return an array of covid', async () => {
      // const result: Observable<any[]> = [
      //   {
      //     age: 2,
      //     breed: 'Bombay',
      //     name: 'Pixel',
      //   },
      // ];
      // jest.spyOn(covidService, 'getStates').mockImplementation(() => result);

      // expect(await covidController.getStates()).toBe(result);
    });
  });
});
