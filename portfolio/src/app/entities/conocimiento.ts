import { ConocimientoI } from "./conocimiento-i";

export class Conocimiento implements ConocimientoI {
    id: number;
    nombre: string;
    nivel: string;

    constructor(id:number, nombre: string, nivel: string){
        this.id = id;
        this.nombre = nombre;
        this.nivel = nivel;
    }
}
