import { Vehicle } from './entities/vehicle.entity';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';
export declare class VehiclesService {
    private vehicles;
    create(dto: CreateVehicleDto): Vehicle;
    findByPlate(plate: string): Vehicle;
    update(plate: string, dto: UpdateVehicleDto): Vehicle;
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
