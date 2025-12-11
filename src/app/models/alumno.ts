export class Alumno {
    constructor(
        private _nombre: string,
        private _apellidos: string,
        private _fechaNac: Date,
        private _nota : number[] = [],

    ) { };

    get nombre(): string { return this._nombre; }
    get apellidos(): string { return this._apellidos; }
    get fechaNac(): Date { return this._fechaNac; }
    get notas(): number[] {return this._nota}

    set nombre(nombre: string) { this._nombre = this.nombre }
    set apellidos(apellidos: string) { this._apellidos = this.apellidos }
    set fechaNac(fechaNac: Date) { this._fechaNac = this.fechaNac }
    set notas(nota : number[]) {this._nota = this.notas}

    //Otros metodos

     get notaMedia(): number { 
        return this.notas.reduce((acum, n) => acum + n) / this.notas.length;
    }

    
}
