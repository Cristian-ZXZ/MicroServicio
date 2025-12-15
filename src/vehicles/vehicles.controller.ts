import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { VehiclesService } from './vehicles.service';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';

@ApiTags('Vehicles')
@Controller('vehicles')
export class VehiclesController {
  constructor(private readonly vehiclesService: VehiclesService) {}

  @Post()
  @ApiOperation({ summary: 'Create a vehicle' })
  @ApiResponse({ status: 201, description: 'Vehicle created' })
  create(@Body() dto: CreateVehicleDto) {
    return this.vehiclesService.create(dto);
  }

  @Get(':plate')
  @ApiOperation({ summary: 'Find vehicle by plate' })
  @ApiResponse({ status: 200, description: 'Vehicle found' })
  @ApiResponse({ status: 404, description: 'Vehicle not found' })
  findByPlate(@Param('plate') plate: string) {
    return this.vehiclesService.findByPlate(plate);
  }

  @Put(':plate')
  @ApiOperation({ summary: 'Update vehicle information' })
  update(
    @Param('plate') plate: string,
    @Body() dto: UpdateVehicleDto,
  ) {
    return this.vehiclesService.update(plate, dto);
  }

  @Delete(':plate')
  @ApiOperation({ summary: 'Delete vehicle' })
  remove(@Param('plate') plate: string) {
    return this.vehiclesService.remove(plate);
  }

  @Get(':plate/availability')
  @ApiOperation({ summary: 'Check vehicle availability' })
  getAvailability(@Param('plate') plate: string) {
    return this.vehiclesService.getAvailability(plate);
  }

  @Post(':plate/rent')
  @ApiOperation({ summary: 'Rent a vehicle' })
  rentVehicle(@Param('plate') plate: string) {
    return this.vehiclesService.rentVehicle(plate);
  }

  @Post(':plate/return')
  @ApiOperation({ summary: 'Return a vehicle' })
  returnVehicle(@Param('plate') plate: string) {
    return this.vehiclesService.returnVehicle(plate);
  }
}
