class camion extends vehiculo
    implements acciones
{
    constructor(
        color: string,
        peso:number,
        altura:number,
        longitud:number,
        rodaje:number,
        serie:string,
        private _maximoPesoArrastre:number
    ){
        super(color,peso,altura,longitud,rodaje,serie);
    }

    get maximoPesoArrastre(){
        return this._maximoPesoArrastre;
    }
    set maximoPesoArrastre(value:number){
        this._maximoPesoArrastre = value;
    }
    anclarCarga():void{
        
    };
    encendido(): void {
        throw new Error("Method not implemented.");
    }
    aireAcondicionado(): void {
        throw new Error("Method not implemented.");
    }
    acelerar(): void {
        throw new Error("Method not implemented.");
    }
    apagar(): void {
        throw new Error("Method not implemented.");
    }
    frenar(): void {
        throw new Error("Method not implemented.");
    }
}