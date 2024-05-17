import { Controller, Get, Post, Query } from '@nestjs/common';
import { CompraService } from './compra.service';
import { CreateCompraDto } from './dto/create-compra.dto';

@Controller('compra')
export class CompraController {
  constructor(private readonly compraService: CompraService) {}

  @Post()
  async create(@Query() createCompra: CreateCompraDto) {
    try {
      await this.compraService.create(createCompra);
      return 'Compra realizada con éxito';
    }
    catch (error) {
      return 'Error al realizar la compra';
    }
  }

  @Get()
  findAll() {
    return this.compraService.findAll();
  }

}
