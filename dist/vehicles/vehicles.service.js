"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehiclesService = void 0;
const common_1 = require("@nestjs/common");
let VehiclesService = class VehiclesService {
    vehicles = [];
    create(dto) {
        const vehicle = {
            id: this.vehicles.length + 1,
            ...dto,
        };
        this.vehicles.push(vehicle);
        return vehicle;
    }
    findByPlate(plate) {
        const vehicle = this.vehicles.find((v) => v.plate === plate);
        if (!vehicle) {
            throw new common_1.NotFoundException('Vehicle not found');
        }
        return vehicle;
    }
    update(plate, dto) {
        const vehicle = this.findByPlate(plate);
        Object.assign(vehicle, dto);
        return vehicle;
    }
    remove(plate) {
        const index = this.vehicles.findIndex((v) => v.plate === plate);
        if (index === -1) {
            throw new common_1.NotFoundException('Vehicle not found');
        }
        this.vehicles.splice(index, 1);
    }
    getAvailability(plate) {
        const vehicle = this.findByPlate(plate);
        return {
            plate: vehicle.plate,
            isAvailable: vehicle.isAvailable,
        };
    }
    rentVehicle(plate) {
        const vehicle = this.findByPlate(plate);
        if (!vehicle.isAvailable) {
            throw new common_1.BadRequestException('Vehicle is already rented');
        }
        vehicle.isAvailable = false;
        return {
            message: 'Vehicle successfully rented',
            plate: vehicle.plate,
        };
    }
    returnVehicle(plate) {
        const vehicle = this.findByPlate(plate);
        if (vehicle.isAvailable) {
            throw new common_1.BadRequestException('Vehicle is already available');
        }
        vehicle.isAvailable = true;
        return {
            message: 'Vehicle successfully returned',
            plate: vehicle.plate,
        };
    }
};
exports.VehiclesService = VehiclesService;
exports.VehiclesService = VehiclesService = __decorate([
    (0, common_1.Injectable)()
], VehiclesService);
//# sourceMappingURL=vehicles.service.js.map