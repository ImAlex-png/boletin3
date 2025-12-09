export class Alumno {
    constructor(
        private _nombre: string = "Ale",
        private _apellidos: string = "Jimenez Carballar",
        private _fechaNac: Date,
        private _nota1: number = 6,
        private _nota2: number = 9,
        private _nota3: number = 5,

    ) { };

    get nombre(): string { return this._nombre; }
    get apellidos(): string { return this._apellidos; }
    get fechaNac(): Date { return this._fechaNac; }
    get nota1(): number { return this._nota1; }
    get nota2(): number { return this._nota2; }
    get nota3(): number { return this._nota3; }

    set nombre(nombre: string) { this._nombre = this.nombre }
    set apellidos(apellidos: string) { this._apellidos = this.apellidos }
    set fechaNac(fechaNac: Date) { this._fechaNac = this.fechaNac }
    set nota1(nota1: number) { this._nota1 = this.nota1 }
    set nota2(nota2: number) { this._nota2 = this.nota2 }
    set nota3(nota3: number) { this._nota3 = this.nota3 }

    //Otros metodos

    get notaMedia(): number { return (this._nota1 + this._nota2 + this._nota3) / 3 }
}
