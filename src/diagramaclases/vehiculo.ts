class vehiculo {
    constructor(
        private _color: string,
        private _peso: number,
        private _altura: number,
        private _longitud: number,
        private _rodaje: number,
        private _serie: string) { }
    get color() {
        return this._color;
    }
    set color(value: string) {
        this._color = value;
    }
    get peso() {
        return this._peso;
    }
    set peso(value: number) {
        this._peso = value;
    }
    get altura() {
        return this._altura;
    }
    set altura(value: number) {
        this._altura = value;
    }
    get longitud() {
        return this._longitud;
    }
    set longitud(value: number) {
        this._longitud = value;
    }
    get rodaje() {
        return this._rodaje;
    }
    set rodaje(value: number) {
        this._rodaje = value;
    }
    get serie() {
        return this._serie;
    }
    set serie(value: string) {
        this._serie = value;
    }
}