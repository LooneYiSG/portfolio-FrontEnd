import { ExpLaboralI } from "./exp-laboral-i";

export class ExpLaboral implements ExpLaboralI {
    id: number;
    institucion: string;
    cargo: string;
    fecha_desde: string;
    fecha_hasta: string;
    descripcion: string;

    constructor(id: number, institucion: string, cargo: string, fecha_desde: string, fecha_hasta: string, descripcion: string){
        this.id = id;
        this.institucion = institucion;
        this.cargo = cargo;
        this.fecha_desde = fecha_desde;
        this.fecha_hasta = fecha_hasta;
        this.descripcion = descripcion;
    }
}
