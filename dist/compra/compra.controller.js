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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompraController = void 0;
const common_1 = require("@nestjs/common");
const compra_service_1 = require("./compra.service");
const create_compra_dto_1 = require("./dto/create-compra.dto");
let CompraController = class CompraController {
    constructor(compraService) {
        this.compraService = compraService;
    }
    async create(createCompra) {
        try {
            await this.compraService.create(createCompra);
            return 'Compra realizada con éxito';
        }
        catch (error) {
            return 'Error al realizar la compra';
        }
    }
    findAll() {
        return this.compraService.findAll();
    }
};
exports.CompraController = CompraController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_compra_dto_1.CreateCompraDto]),
    __metadata("design:returntype", Promise)
], CompraController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CompraController.prototype, "findAll", null);
exports.CompraController = CompraController = __decorate([
    (0, common_1.Controller)('compra'),
    __metadata("design:paramtypes", [compra_service_1.CompraService])
], CompraController);
//# sourceMappingURL=compra.controller.js.map