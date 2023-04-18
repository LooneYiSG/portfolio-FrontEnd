import { Conocimiento } from "./conocimiento";
import { HabilidadI } from "./habilidad-i";

export class Habilidad implements HabilidadI {
    id: number;
    nombre: string;
    conocimientos: Conocimiento[];

    constructor(id: number, nombre: string, conocimientos: Conocimiento[]) {
        this.id = id;
        this.nombre = nombre;
        this.conocimientos = conocimientos;
    }
}
