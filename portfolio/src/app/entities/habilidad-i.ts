import { Conocimiento } from "./conocimiento";

export interface HabilidadI {
    id: number;
    nombre: string;
    conocimientos: Conocimiento[];
}
