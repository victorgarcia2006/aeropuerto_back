import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hola desde la API del aeropuerto de zacatecas';
  }
}
