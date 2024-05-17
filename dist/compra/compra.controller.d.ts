import { CompraService } from './compra.service';
import { CreateCompraDto } from './dto/create-compra.dto';
export declare class CompraController {
    private readonly compraService;
    constructor(compraService: CompraService);
    create(createCompra: CreateCompraDto): Promise<"Compra realizada con éxito" | "Error al realizar la compra">;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
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
