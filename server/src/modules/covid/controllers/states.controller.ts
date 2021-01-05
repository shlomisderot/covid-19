import { Controller, Get, UseGuards } from '@nestjs/common';
import { RolesGuard } from '../../../common';
import { StatesService } from '../services/states.service';



@UseGuards(RolesGuard)
@Controller('api/states')
export class StatesController {
  constructor(private readonly service: StatesService) { }

  @Get('')
  async getStates() {
    return this.service.getStates()
  }

  // https://covidtracking.com/api/states/daily

  @Get('daily')
  async getStateDaily() {
    return this.service.getStateDaily()
  }

  @Get('info')
  async getStateInfo() {
    return this.service.getInfo()
  }
}
