import { Injectable } from '@nestjs/common';
import { Auto } from './autoDto';
import { Camioneta } from './camionetaDto';
import { Vehiculo } from './vehiculoDto';
import * as fs from 'fs';

@Injectable()
export class VehiculoService {
    private listado : Vehiculo [];
    
    private loadVehiculos(): void {
        let archivo = fs.readFileSync('C:/Users/atoscani/source/repos/tarea-backend/cfp-demo/config/vehiculos.csv', 'utf8');

        const elementos: string[][] =
            archivo.split('\n').map(item => item.replace('\r', '')).map(item => item.split(','));
    
        //Para que se mantenga actualizado el listado, se inicializa acá!!
        this.listado = [];
        for (let i = 0; i < elementos.length; i++) {
            let vehiculo : Vehiculo;
            switch (elementos[i][5]) {
                case 'auto':
                    vehiculo = new Auto(elementos[i][0],elementos[i][1],elementos[i][2],parseInt(elementos[i][3])
                                        ,parseInt(elementos[i][4]),elementos[i][5]);
                    break;
            
                case 'camioneta':
                    vehiculo = new Camioneta(elementos[i][0],elementos[i][1],elementos[i][2],parseInt(elementos[i][3])
                                             ,parseInt(elementos[i][4]),elementos[i][5]);
                    break;        
            }
            this.listado.push(vehiculo);
        }
    }
    public mostrarVehiculos(): Vehiculo[]{
        this.loadVehiculos();
        return this.listado;
    }
    public agregar(vehiculos : Vehiculo[]){
        vehiculos.forEach(item=>{
            fs.appendFileSync('config/vehiculos.csv',
             `${'\n'}${item.patente},${item.marca},${item.modelo},${item.anio},${item.precio},${item.tipo}`
            );                                
        });
        this.loadVehiculos();
    }
    public mostrarAutos() : Auto[]{
        this.loadVehiculos();
        let listadoAutos :Auto[] = [];
        this.listado.forEach((v)=>{
            if(v.tipo === 'auto'){
                listadoAutos.push(<Auto>v);
            }
        });
        return listadoAutos;
    }
    public mostrarCamionetas() : Camioneta[]{
        this.loadVehiculos();
        let listadoAutos :Camioneta[] = [];
        this.listado.forEach((v)=>{
            if(v.tipo === 'camioneta'){
                listadoAutos.push(<Camioneta>v);
            }
        });
        return listadoAutos;
    }
    public getVehiculo(patente: string): Vehiculo {
        return this.listado.reduce((obj,vehiculo)=>{
           if (vehiculo.patente == patente)
                obj = vehiculo;
                return obj;
        },<Vehiculo> {}) as Vehiculo;
    }
}
