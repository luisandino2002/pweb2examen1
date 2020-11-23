class sedan extends vehiculo
    implements acciones {
    constructor(
        color: string,
        peso: number,
        altura: number,
        longitud: number,
        rodaje: number,
        serie: string,
        private _capacidad: number
    ) {
        super(color, peso, altura, longitud, rodaje, serie);
    }
    get capacidad() {
        return this._capacidad;
    }

    set capacidad(value: number) {
        this._capacidad = value;
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
}