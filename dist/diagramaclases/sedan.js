class sedan extends vehiculo {
    constructor(color, peso, altura, longitud, rodaje, serie, _capacidad) {
        super(color, peso, altura, longitud, rodaje, serie);
        this._capacidad = _capacidad;
    }
    get capacidad() {
        return this._capacidad;
    }
    set capacidad(value) {
        this._capacidad = value;
    }
    encendido() {
        throw new Error("Method not implemented.");
    }
    aireAcondicionado() {
        throw new Error("Method not implemented.");
    }
    acelerar() {
        throw new Error("Method not implemented.");
    }
    apagar() {
        throw new Error("Method not implemented.");
    }
    frenar() {
        throw new Error("Method not implemented.");
    }
}
