import { Module } from '@nestjs/common';
import { CoreModule } from './core/core.module';
import { CovidModule } from './modules/covid/covid.module';

@Module({
  imports: [CoreModule, CovidModule],
})
export class AppModule {}
