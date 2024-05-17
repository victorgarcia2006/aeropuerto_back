import { Pasajero } from './../../node_modules/.prisma/client/index.d';
import { Injectable } from '@nestjs/common';
import { Compra } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CompraService {
  constructor(private prisma: PrismaService) {}

  async create(compra: Compra): Promise<Compra> {
    const date = new Date();
    compra.FECHA = date;
    compra.COSTO_TOTAL = 5000;
    compra.VUELO = Number(compra.VUELO);
    
    try {
      return await this.prisma.compra.create({ data: compra });
    }
    catch (error) {
      console.log(error)
      throw new Error()
    }
  }

  findAll() {
    const compra = this.prisma.compra.findMany({
      select: {
        FECHA: true,
        VUELO: true,
        pasajero: {
          select: {
            NOMBRE: true,
            PAPELLIDO: true,
            SAPELLIDO: true,
          }
        },
        COSTO_TOTAL: true,
      },
      where: {
        pasajero:{
          EMAIL: 'elteo_89@gmail.com'
        }
      }
    })
    return compra;
  }
}
