"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompraService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let CompraService = class CompraService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(compra) {
        const date = new Date();
        compra.FECHA = date;
        compra.COSTO_TOTAL = 5000;
        compra.VUELO = Number(compra.VUELO);
        try {
            return await this.prisma.compra.create({ data: compra });
        }
        catch (error) {
            console.log(error);
            throw new Error();
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
                pasajero: {
                    EMAIL: 'elteo_89@gmail.com'
                }
            }
        });
        return compra;
    }
};
exports.CompraService = CompraService;
exports.CompraService = CompraService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CompraService);
//# sourceMappingURL=compra.service.js.map