import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Vuelo } from '@prisma/client';

@Injectable()
export class VueloService {
  constructor(private prisma: PrismaService) {}

  async getAllFlights(){
    const vuelos = await this.prisma.vuelo.findMany({
      select: {
        NUMERO_VUELO: true,
        aerolinea: {
          select: {
            NOMBRE: true,
          },
        },
        avion: {
          select: {
            MODELO: true,
          }
        },
        PRECIO: true,
        piloto: {
          select: {
            NOMBRE: true,
          }
        },
        FECHA_SALIDA: true,
        FECHA_LLEGADA: true,
        ORIGEN: true,
        DESTINO: true,
        HORAS_VUELO: true,
      }
    });
    return vuelos;
  }
}
