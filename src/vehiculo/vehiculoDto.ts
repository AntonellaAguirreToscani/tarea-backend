export class Vehiculo{
    private _patente :string;
    private _marca: string;
    private _modelo: string;
    private _anio : number;
    private _precio : number;
    private _tipo: string;

    public constructor(_patente:string,_marca:string,_modelo:string,_anio:number,_precio:number,_tipo:string){
        this._patente =_patente;
        this._marca = _marca;
        this._modelo =_modelo;
        this._anio =_anio;
        this._precio = _precio;
        this._tipo =_tipo;
    }
    public get patente():string{
        return this._patente;
    }
    public get marca():string{
        return this._marca;
    }
    public get modelo():string{
        return this._modelo;
    }
    public get anio():number{
        return this._anio;
    }
    public get precio():number{
        return this._precio;
    }
    public get tipo():string{
        return this._tipo;
    }
}