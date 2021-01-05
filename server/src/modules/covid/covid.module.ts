import { HttpModule } from '@nestjs/common';
import { Module } from '@nestjs/common';
import { StatesController } from './controllers/states.controller';
import { CovidController } from './controllers/covid.controller';
import { CovidService } from './services/covid.service';
import { StatesService } from './services/states.service';

@Module({
  imports: [HttpModule],
  controllers: [CovidController, StatesController],
  providers: [CovidService, StatesService],
})
export class CovidModule {}
