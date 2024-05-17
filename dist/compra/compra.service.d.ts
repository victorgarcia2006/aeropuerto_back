import { Compra } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class CompraService {
    private prisma;
    constructor(prisma: PrismaService);
    create(compra: Compra): Promise<Compra>;
    findAll(): import("@prisma/client").Prisma.PrismaPromise<{
        pasajero: {
            NOMBRE: string;
            PAPELLIDO: string;
            SAPELLIDO: string;
        };
        FECHA: Date;
        VUELO: number;
        COSTO_TOTAL: number;
    }[]>;
}
