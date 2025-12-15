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
exports.VehiclesController = void 0;
const common_1 = require("@nestjs/common");
const vehicles_service_1 = require("./vehicles.service");
const create_vehicle_dto_1 = require("./dto/create-vehicle.dto");
const update_vehicle_dto_1 = require("./dto/update-vehicle.dto");
const swagger_1 = require("@nestjs/swagger");
let VehiclesController = class VehiclesController {
    vehiclesService;
    constructor(vehiclesService) {
        this.vehiclesService = vehiclesService;
    }
    create(dto) {
        return this.vehiclesService.create(dto);
    }
    findByPlate(plate) {
        return this.vehiclesService.findByPlate(plate);
    }
    update(plate, dto) {
        return this.vehiclesService.update(plate, dto);
    }
    remove(plate) {
        return this.vehiclesService.remove(plate);
    }
    getAvailability(plate) {
        return this.vehiclesService.getAvailability(plate);
    }
    rentVehicle(plate) {
        return this.vehiclesService.rentVehicle(plate);
    }
    returnVehicle(plate) {
        return this.vehiclesService.returnVehicle(plate);
    }
};
exports.VehiclesController = VehiclesController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a vehicle' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Vehicle created' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_vehicle_dto_1.CreateVehicleDto]),
    __metadata("design:returntype", void 0)
], VehiclesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':plate'),
    (0, swagger_1.ApiOperation)({ summary: 'Find vehicle by plate' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Vehicle found' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Vehicle not found' }),
    __param(0, (0, common_1.Param)('plate')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VehiclesController.prototype, "findByPlate", null);
__decorate([
    (0, common_1.Put)(':plate'),
    (0, swagger_1.ApiOperation)({ summary: 'Update vehicle information' }),
    __param(0, (0, common_1.Param)('plate')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_vehicle_dto_1.UpdateVehicleDto]),
    __metadata("design:returntype", void 0)
], VehiclesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':plate'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete vehicle' }),
    __param(0, (0, common_1.Param)('plate')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VehiclesController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)(':plate/availability'),
    (0, swagger_1.ApiOperation)({ summary: 'Check vehicle availability' }),
    __param(0, (0, common_1.Param)('plate')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VehiclesController.prototype, "getAvailability", null);
__decorate([
    (0, common_1.Post)(':plate/rent'),
    (0, swagger_1.ApiOperation)({ summary: 'Rent a vehicle' }),
    __param(0, (0, common_1.Param)('plate')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VehiclesController.prototype, "rentVehicle", null);
__decorate([
    (0, common_1.Post)(':plate/return'),
    (0, swagger_1.ApiOperation)({ summary: 'Return a vehicle' }),
    __param(0, (0, common_1.Param)('plate')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VehiclesController.prototype, "returnVehicle", null);
exports.VehiclesController = VehiclesController = __decorate([
    (0, swagger_1.ApiTags)('Vehicles'),
    (0, common_1.Controller)('vehicles'),
    __metadata("design:paramtypes", [vehicles_service_1.VehiclesService])
], VehiclesController);
//# sourceMappingURL=vehicles.controller.js.map