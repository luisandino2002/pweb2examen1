class avioneta extends vehiculo
    implements acciones
{
    constructor (
        color:string,
        peso:number,
        altura:number,
        longitud:number,
        rodaje:number,
        serie:string,
        private _maximaAltitud:number,
        private _cantidadMotores:string
    ) {
        super(color,peso,altura,longitud,rodaje,serie);
    }
    elevar():void{

    }
    aterrizar():void{

    }
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

    get maximaAltitud(){
        return this._maximaAltitud;
    }
    set maximaAltitud(value:number){
        this._maximaAltitud=value;
    }

    get cantidadMotores(){
        return this._cantidadMotores;
    }
    set cantidadMotores(value:string){
        this._cantidadMotores=value;
    }
}