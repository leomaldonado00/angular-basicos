import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes : string[] = ["Goku","Thor","Spiderman","Hulk","Capitan"];
  heroesBorrados : string[] = [];

  borrarHeroe( index : number) {
    const heroeBorrado : string[] = this.heroes.splice(index, 1);
    this.heroesBorrados = [...this.heroesBorrados, ...heroeBorrado];

  }
}
