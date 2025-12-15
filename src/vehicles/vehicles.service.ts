import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { Vehicle } from './entities/vehicle.entity';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';

@Injectable()
export class VehiclesService {
  private vehicles: Vehicle[] = [];

  // =====================
  // CRUD BÁSICO
  // =====================

  create(dto: CreateVehicleDto): Vehicle {
    const vehicle: Vehicle = {
      id: this.vehicles.length + 1,
      ...dto,
    };

    this.vehicles.push(vehicle);
    return vehicle;
  }

  findByPlate(plate: string): Vehicle {
    const vehicle = this.vehicles.find((v) => v.plate === plate);
    if (!vehicle) {
      throw new NotFoundException('Vehicle not found');
    }
    return vehicle;
  }

  update(plate: string, dto: UpdateVehicleDto): Vehicle {
    const vehicle = this.findByPlate(plate);
    Object.assign(vehicle, dto);
    return vehicle;
  }

  remove(plate: string): void {
    const index = this.vehicles.findIndex((v) => v.plate === plate);
    if (index === -1) {
      throw new NotFoundException('Vehicle not found');
    }
    this.vehicles.splice(index, 1);
  }

  // =====================
  // LÓGICA DE ALQUILER
  // =====================

  getAvailability(plate: string) {
    const vehicle = this.findByPlate(plate);

    return {
      plate: vehicle.plate,
      isAvailable: vehicle.isAvailable,
    };
  }

  rentVehicle(plate: string) {
    const vehicle = this.findByPlate(plate);

    if (!vehicle.isAvailable) {
      throw new BadRequestException('Vehicle is already rented');
    }

    vehicle.isAvailable = false;

    return {
      message: 'Vehicle successfully rented',
      plate: vehicle.plate,
    };
  }

  returnVehicle(plate: string) {
    const vehicle = this.findByPlate(plate);

    if (vehicle.isAvailable) {
      throw new BadRequestException('Vehicle is already available');
    }

    vehicle.isAvailable = true;

    return {
      message: 'Vehicle successfully returned',
      plate: vehicle.plate,
    };
  }
}
