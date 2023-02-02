import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations: [ // que contiene el modulo: componentes, pipes... (INVISIBLE, excepto los componentes declarados debajo)
        HeroeComponent, // este no lo puse en exports, no se puede llamar desde otro modulo ??? no Renderiza ??
        ListadoComponent
    ],
    exports: [ // que sea visible o publicas fuera, de este modulo
        ListadoComponent, // este si se puede llamar desde otro modulo, por ej: app.module.ts
    ],
    imports: [ // modulos
        CommonModule
    ]

})
export class HeroesModule {

}