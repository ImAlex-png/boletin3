import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Alumno } from './models/alumno';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

// Todo componente que implementa OnInit debe definir un metodo llamado ngOnInit que se ejecuta nada mas cargar la pagina seria lo equivalente al window.onload de js y ts nativo.
export class App implements OnInit {

  protected readonly title = signal('boletin3');

  public datos: number[] = [1, 7, 8, 3, 4, 9];
  public compis: string[] = ["Juanillo de la palma", "Jesus", "Alberto", "Antonio de triana", "Amanda", "Pedro", "Enrique"];

  public alumnos: Alumno[] = [];

  public alumno1 = new Alumno("Ale", "Jimenez Carballar", new Date(), [5, 6, 9]);
  public alumno2 = new Alumno("Salvador", "Peinado", new Date(), [1, 3, 8]);
  public alumno3 = new Alumno("Octavio", "Montero", new Date(), [10, 7, 4]);

  public opt: string = "";
  public mensaje: string = "";

  ngOnInit(): void {
    // console.log(this.datos);
    // console.log(this.compis);
    this.alumnos.push(this.alumno1, this.alumno2, this.alumno3);
  }
  public dobleDatos(): void {
    // MAP ( recorre y mappea un array, y devuelve uno nuevo con el resultado ( al final el factor de cambio ))
    console.log(this.datos.map(n => (n * 2)));
  }

  public mayorCinco(): void {
    //FILTER ( filtra un array segun una condicion n = numeros dentro del array )
    console.log(this.datos.filter(n => (n >= 5)));
  }

  public ordena(flag: boolean): void {
    //SORT ( ordenar un array segun que condicion )
    if (flag) {
      console.log(this.datos.sort((primero, siguiente) => (primero - siguiente)));
    } else {
      console.log(this.datos.sort((primero, siguiente) => (siguiente - primero)));
    }
  }

  public muestraAlumnoMayusculayA(): void {
    console.log(this.compis.map(a => a.toUpperCase())
      .filter(nombre => (nombre.startsWith('A'))));
  }

  public mediaDatos(): void {
    console.log((this.datos.reduce((acumulador, valor) => (acumulador + valor)) / this.datos.length).toFixed(2));
  }

  public aplicaPorcentaje(precios: number[], porcentaje: number): void {
    console.log(precios.map(precio => precio - (1 - porcentaje / 100)));
  }

  public mostrarEstadisticas(): void {
    let notasTotales = this.notasByAlumnos();
    console.log(notasTotales);

    switch (this.opt) {
      case 'a':
        //Mostrar la moda
        this.mostrar_moda(notasTotales);
        break;
      case 'b':
        //Mostrar la media
        this.mostrar_media(notasTotales);
        break;
      case 'c':
        //Mostrar media aprobados
        this.media_aprobados(notasTotales);
        break;
      case 'd':
        //Mostrar nota maxima mayores al 2000
        this.nota_maxima_anyo(2000);
        break;
      default:
        console.error("Opcion no encontrada");
        break;
    }
  }

  //Metodos de uso interno, no accesibles desde fuera de la clase
  public notasByAlumnos(): number[] {
    return this.alumnos.flatMap(alumno => alumno.notas);
  }

  private mostrar_media(notasTotales: number[]): void {
    this.mensaje = "La nota media es: " +
      notasTotales.reduce((acum, n) => acum + n) / notasTotales.length;
  }

  private mostrar_moda(notasTotales: number[]) {
    let recuentoNotas: Map<number, number> = new Map();
    let valorMaximo: number = 0;
    let claveMaxima: number = 0;
    for (let n of notasTotales) {
      recuentoNotas.set(n, (recuentoNotas.get(n) || 0) + 1);
    }

    for (let [k, v] of recuentoNotas) {
      if (v > valorMaximo) {
        valorMaximo = v;
        claveMaxima = k;
      }
    }

    this.mensaje = "La moda es: " + claveMaxima;

  }

  private media_aprobados(notasTotales: number[]): void {
    this.mensaje = "La nota media es: " + notasTotales
      .filter(n => n > 5)
      .reduce((acum, n) => acum + n) / (notasTotales.filter(n => n > 5)).length;
  }


  private nota_maxima_anyo(year: number): void {
    this.mensaje = "La nota maxima de los alumnos mayores al 2000 es : " + this.alumnos.filter(a => a.fechaNac.getFullYear() > year)
      .flatMap(a => a.notas)
      .reduce((max, n) => n > max ? n : max);
  }

  // //Poner todas las notas de todos los alumnos en un solo array
  // public notasByAlumnos(): number[]{
  //   return this.alumnos.flatMap(alumno => alumno.notas);
  // }

  // public mediaEstudiantes() : void{

  // }

  // Si notas es nota1, nota2, nota3
  // public mediaEstudiantes(): void {
  //   if (this.alumnos.length === 0) {
  //     console.log("No hay alumnos");
  //   }
  //   console.log((this.alumnos.reduce((acum: number, alumno: Alumno) => acum + alumno.notaMedia, 0) / this.alumnos.length).toFixed(2));
  // }

  // Si notas es nota1, nota2, nota3
  // public mediaSoloAprobados(): void {
  //   if (this.alumnos.length === 0) {
  //     console.log("No hay alumnos");
  //   }

  //   let aprobados = this.alumnos.filter(alumno => alumno.notaMedia >= 5);

  //   console.log((aprobados.reduce((acum: number, alumno : Alumno) => acum + alumno.notaMedia, 0) / aprobados.length).toFixed(2))
  // }


}
