import { Module } from '@nestjs/common';
import { CatsModule } from './modules/cats/cats.module';
import { CoreModule } from './core/core.module';
import { CovidModule } from './modules/covid/covid.module';

@Module({
  imports: [CoreModule, CatsModule, CovidModule],
})
export class AppModule {}
