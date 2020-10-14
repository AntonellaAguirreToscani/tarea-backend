import { Vehiculo } from "./vehiculoDto";

export class Auto extends Vehiculo{
    private _baul : boolean;

    public constructor(_patente:string,_marca:string,_modelo:string,_anio:number,_precio:number,_tipo:string){
        super(_patente,_marca,_modelo,_anio,_precio,_tipo)
        this._baul = true;
    }
}