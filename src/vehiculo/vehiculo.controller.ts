import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Auto } from './autoDto';
import { Camioneta } from './camionetaDto';
import { VehiculoService } from './vehiculo.service';
import { Vehiculo } from './vehiculoDto';

@Controller('vehiculos')
export class VehiculoController {
    constructor(private vehiculoService: VehiculoService){}

    @Get()
    getVehiculos(): Vehiculo[]{
        return this.vehiculoService.mostrarVehiculos();
    }
    @Post()
    agregar(@Body()vehiculos : Vehiculo []){
        this.vehiculoService.agregar(vehiculos);
    }
    @Get('/autos')
    getAutos() : Auto[]{
        return this.vehiculoService.mostrarAutos();
    }
    @Get('/camionetas')
    getCamionetas(): Camioneta[]{
        return this.vehiculoService.mostrarCamionetas();
    }
    @Get(':patente')
    getVehiculo(@Param('patente') patente: string): Vehiculo{
      return this.vehiculoService.getVehiculo(patente);
    }

}
