class avioneta extends vehiculo {
    constructor(color, peso, altura, longitud, rodaje, serie, _maximaAltitud, _cantidadMotores) {
        super(color, peso, altura, longitud, rodaje, serie);
        this._maximaAltitud = _maximaAltitud;
        this._cantidadMotores = _cantidadMotores;
    }
    elevar() {
    }
    aterrizar() {
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
    get maximaAltitud() {
        return this._maximaAltitud;
    }
    set maximaAltitud(value) {
        this._maximaAltitud = value;
    }
    get cantidadMotores() {
        return this._cantidadMotores;
    }
    set cantidadMotores(value) {
        this._cantidadMotores = value;
    }
}
