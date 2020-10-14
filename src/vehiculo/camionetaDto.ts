import { Vehiculo } from "./vehiculoDto";

export class Camioneta extends Vehiculo{
    private _furgoneta: boolean;

    public constructor(_patente:string,_marca:string,_modelo:string,_anio:number,_precio:number,_tipo:string){
        super(_patente,_marca,_modelo,_anio,_precio,_tipo)
        this._furgoneta = true;
    }
}