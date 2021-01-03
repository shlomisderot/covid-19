import { Controller, Get, UseGuards } from '@nestjs/common';
import { RolesGuard } from '../../common';
import { CovidService } from './covid.service';



@UseGuards(RolesGuard)
@Controller('covid')
export class CovidController {
  constructor(private readonly service: CovidService) { }

  @Get('states')
  async getStates() {
    return this.service.getStates()
  }
}
