import { Controller, Get } from '@nestjs/common';
import { VueloService } from './vuelo.service';

@Controller('vuelo')
export class VueloController {
  constructor(private readonly vueloService: VueloService) {}

  @Get()
  findAll() {
    return this.vueloService.getAllFlights();
  }
}
