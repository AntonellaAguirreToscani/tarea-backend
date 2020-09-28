import { Body, Controller, Get, Post } from '@nestjs/common';
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
        console.log('entro');
        return this.vehiculoService.mostrarAutos();
    }
    @Get('/camionetas')
    getCamionetas(): Camioneta[]{
        return this.vehiculoService.mostrarCamionetas();
    }

}
