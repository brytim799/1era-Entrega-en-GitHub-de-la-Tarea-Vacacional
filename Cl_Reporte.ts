import Cl_Grupo from "./Cl_Grupo.js";

export default class Cl_Reporte {
    //private _promedio: number = 0;
    private _mayorGrupo: string = '';
    private _mayorPromedio: number = 0;
    constructor() {}
    procesarGrupo(grupo: Cl_Grupo): void {
        //this._promedio = grupo.d3();
        if (grupo.d3() > this._mayorPromedio) {
            this._mayorGrupo = grupo.cod;
            this._mayorPromedio = grupo.d3();
        }
    }
  /*promedioGrupo(): number {
        return this._promedio;
    }
  */
    mayorGrupo(): string {
        return this._mayorGrupo;
    }
}