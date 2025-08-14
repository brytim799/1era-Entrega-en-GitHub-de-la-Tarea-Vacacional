export default class Cl_Reporte {
    constructor() {
        //private _promedio: number = 0;
        this._mayorGrupo = '';
        this._mayorPromedio = 0;
    }
    procesarGrupo(grupo) {
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
    mayorGrupo() {
        return this._mayorGrupo;
    }
}
