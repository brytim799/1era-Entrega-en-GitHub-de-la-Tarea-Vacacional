import Cl_Grupo from "./Cl_Grupo.js";
import Cl_Reporte from "./Cl_Reporte.js";

const grupo1: Cl_Grupo = new Cl_Grupo("A", 10, 5);
const grupo2: Cl_Grupo = new Cl_Grupo("B", 4, 8);
const grupo3: Cl_Grupo = new Cl_Grupo("C", 2, 6);
const grupo4: Cl_Grupo = new Cl_Grupo("D", 3, 9);
const grupo5: Cl_Grupo = new Cl_Grupo("E", 1, 5);

const reporte: Cl_Reporte = new Cl_Reporte();
reporte.procesarGrupo(grupo1);
reporte.procesarGrupo(grupo2);
reporte.procesarGrupo(grupo3);
reporte.procesarGrupo(grupo4);
reporte.procesarGrupo(grupo5);

let salida: HTMLElement | null = document.getElementById("salida");
if (salida !== null) {
    salida.innerHTML = `<h1>Reporte de Grupos</h1> <br>
        <p>Promedio del grupo ${grupo1.cod}: ${grupo1.d3()}</p>
        <p>Promedio del grupo ${grupo2.cod}: ${grupo2.d3()}</p>
        <p>Promedio del grupo ${grupo3.cod}: ${grupo3.d3()}</p>
        <p>Promedio del grupo ${grupo4.cod}: ${grupo4.d3()}</p>
        <p>Promedio del grupo ${grupo5.cod}: ${grupo5.d3()}</p>
        <br>
        <p>Grupo con mayor promedio: ${reporte.mayorGrupo()}</p>
        `;
}
else {
    console.error("La información ingresada no es correcta.");
}