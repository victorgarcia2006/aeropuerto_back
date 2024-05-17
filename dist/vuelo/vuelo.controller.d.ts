import { VueloService } from './vuelo.service';
export declare class VueloController {
    private readonly vueloService;
    constructor(vueloService: VueloService);
    findAll(): Promise<{
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
