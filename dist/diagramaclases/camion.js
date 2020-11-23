class camion extends vehiculo {
    constructor(color, peso, altura, longitud, rodaje, serie, _maximoPesoArrastre) {
        super(color, peso, altura, longitud, rodaje, serie);
        this._maximoPesoArrastre = _maximoPesoArrastre;
    }
    get maximoPesoArrastre() {
        return this._maximoPesoArrastre;
    }
    set maximoPesoArrastre(value) {
        this._maximoPesoArrastre = value;
    }
    anclarCarga() {
    }
    ;
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
