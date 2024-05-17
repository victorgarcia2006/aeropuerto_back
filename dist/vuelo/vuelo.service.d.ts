import { PrismaService } from 'src/prisma/prisma.service';
export declare class VueloService {
    private prisma;
    constructor(prisma: PrismaService);
    getAllFlights(): Promise<{
        aerolinea: {
            NOMBRE: string;
        };
        avion: {
            MODELO: string;
        };
        piloto: {
            NOMBRE: string;
        };
        NUMERO_VUELO: number;
        PRECIO: number;
        FECHA_LLEGADA: Date;
        FECHA_SALIDA: Date;
        DESTINO: string;
        ORIGEN: string;
        HORAS_VUELO: number;
    }[]>;
}
