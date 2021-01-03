import { HttpModule } from '@nestjs/common';
import { Module } from '@nestjs/common';
import { CovidController } from './covid.controller';
import { CovidService } from './covid.service';

@Module({
  imports: [HttpModule],
  controllers: [CovidController],
  providers: [CovidService],
})
export class CovidModule {}
