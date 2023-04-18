import { ProyectoI } from "./proyecto-i";

export class Proyecto implements ProyectoI{
    id: number;
    nombre: string;
    descripcion: string;
    foto?: string;

    constructor(id: number, nombre: string, descripcion: string, foto?: string) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.foto = foto;
    }
}
