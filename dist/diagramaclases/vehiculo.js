class vehiculo {
    constructor(_color, _peso, _altura, _longitud, _rodaje, _serie) {
        this._color = _color;
        this._peso = _peso;
        this._altura = _altura;
        this._longitud = _longitud;
        this._rodaje = _rodaje;
        this._serie = _serie;
    }
    get color() {
        return this._color;
    }
    set color(value) {
        this._color = value;
    }
    get peso() {
        return this._peso;
    }
    set peso(value) {
        this._peso = value;
    }
    get altura() {
        return this._altura;
    }
    set altura(value) {
        this._altura = value;
    }
    get longitud() {
        return this._longitud;
    }
    set longitud(value) {
        this._longitud = value;
    }
    get rodaje() {
        return this._rodaje;
    }
    set rodaje(value) {
        this._rodaje = value;
    }
    get serie() {
        return this._serie;
    }
    set serie(value) {
        this._serie = value;
    }
}
