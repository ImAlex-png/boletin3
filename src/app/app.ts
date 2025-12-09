import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Alumno } from './models/alumno';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

// Todo componente que implementa OnInit debe definir un metodo llamado ngOnInit que se ejecuta nada mas cargar la pagina seria lo equivalente al window.onload de js y ts nativo.
export class App implements OnInit {

  protected readonly title = signal('boletin3');

  public datos: number[] = [1, 7, 8, 3, 4, 9];
  public compis: string[] = ["Juanillo de la palma", "Jesus", "Alberto", "Antonio de triana", "Amanda", "Pedro", "Enrique"];

  public alumnos : Alumno[] = [];

  public alumno1 = new Alumno("Ale", "Jimenez Carballar", new Date(), 5, 6, 9);
  public alumno2 = new Alumno("Salvador", "Peinado", new Date(), 1, 3, 8);
  public alumno3 = new Alumno("Octavio", "Montero", new Date(), 10, 7, 4);

  ngOnInit(): void {
    console.log(this.datos);
    console.log(this.compis);
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

  public mediaAlumnos() : void{
    this.alumnos.reduce(((acum, alumno) => (acum + alumno.notaMedia)) / this.alumnos.length));
  }
}
