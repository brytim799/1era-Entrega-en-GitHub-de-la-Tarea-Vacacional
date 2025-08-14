export default class Cl_Grupo {
    constructor(cod, d1, d2) {
        this._cod = '';
        this._d1 = 0;
        this._d2 = 0;
        this._cod = cod;
        this._d1 = d1;
        this._d2 = d2;
    }
    set cod(cod) {
        this._cod = cod;
    }
    get cod() {
        return this._cod;
    }
    set d1(d1) {
        this._d1 = d1;
    }
    get d1() {
        return this._d1;
    }
    set d2(d2) {
        this._d2 = d2;
    }
    get d2() {
        return this._d2;
    }
    d3() {
        return (this._d1 + this._d2) / 2;
    }
}
