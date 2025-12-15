import { VehiclesService } from './vehicles.service';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';
export declare class VehiclesController {
    private readonly vehiclesService;
    constructor(vehiclesService: VehiclesService);
    create(dto: CreateVehicleDto): import("./entities/vehicle.entity").Vehicle;
    findByPlate(plate: string): import("./entities/vehicle.entity").Vehicle;
    update(plate: string, dto: UpdateVehicleDto): import("./entities/vehicle.entity").Vehicle;
    remove(plate: string): void;
    getAvailability(plate: string): {
        plate: string;
        isAvailable: boolean;
    };
    rentVehicle(plate: string): {
        message: string;
        plate: string;
    };
    returnVehicle(plate: string): {
        message: string;
        plate: string;
    };
}
