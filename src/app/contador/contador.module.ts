import { NgModule } from '@angular/core';
import { ContadorComponent } from './contador/contador.component';


@NgModule({
    declarations: [ // que contiene el modulo: componentes, pipes... (INVISIBLE, excepto los componentes declarados debajo)
        ContadorComponent
    ],
    exports: [ // que sea visible o publicas fuera, de este modulo
        ContadorComponent // este si se puede llamar desde otro modulo, por ej: app.module.ts
    ],
    // imports : [] // no hace falta ya que no se estan usando CommonModule como NgIf, NgFor...
})
export class ContadorModule {

}