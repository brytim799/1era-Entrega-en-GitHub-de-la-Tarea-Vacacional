export default class Cl_Grupo {
    private _cod: string = '';
    private _d1: number = 0;
    private _d2: number = 0;
    constructor(cod: string, d1: number, d2: number) {
        this._cod = cod;
        this._d1 = d1;
        this._d2 = d2;
    }
    set cod(cod: string) {
        this._cod = cod;
    }
    get cod(): string {
        return this._cod;
    }
    set d1(d1: number) {
        this._d1 = d1;
    }
    get d1(): number {
        return this._d1;
    }
    set d2(d2: number) {
        this._d2 = d2;
    }
    get d2(): number {
        return this._d2;
    }
    d3(): number {
        return (this._d1 + this._d2) / 2;
    }
}  