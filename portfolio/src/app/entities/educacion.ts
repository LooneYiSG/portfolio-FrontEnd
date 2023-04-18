import { EducacionI } from "./educacion-i";

export class Educacion implements EducacionI {
    id: number;
    institucion: string;
    fecha_ingreso: string;
    fecha_egreso: string;
    descripcion: string;
    foto?: string;

    constructor(id:number, institucion: string, fecha_ingreso: string, fecha_egreso: string, descripcion: string, foto?: string){
        this.id = id;
        this.institucion = institucion;
        this.fecha_ingreso = fecha_ingreso;
        this.fecha_egreso = fecha_egreso;
        this.descripcion = descripcion;
        this.foto = foto;
    }
}
