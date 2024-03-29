import { UsuarioI } from "./usuario-i";

export class Usuario implements UsuarioI {
    id: number;
    email: string;
    password: string;
    nombre: string;
    apellido: string;
    sobre_mi: string;
    foto?:   string;

    constructor(id:number, email: string, password: string, nombre: string, apellido: string, sobre_mi: string, foto?: string){
        this.id = id;
        this.email = email;
        this.password = password;
        this.nombre = nombre;
        this.apellido = apellido;
        this.sobre_mi = sobre_mi;
        this.foto = foto;
    }
}
