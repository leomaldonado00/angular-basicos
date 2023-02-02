import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorModule } from './contador/contador.module';
import { HeroesModule } from './heroes/heroes.module';

// GENERAR COMPONENTE DE FORMA AUTOMATICA: ng generate component nombreComponente/path
                                       //  ng g c nombreComponente/path

@NgModule({
  declarations: [ // que tiene el modulo.. componentes que se estan ustilizando, pipes...
    AppComponent,
  ],
  imports: [ // Modulos
    BrowserModule,
    HeroesModule,
    ContadorModule
  ],
  providers: [], // Servicios especifico a un modulo
  bootstrap: [AppComponent] // Porque AppComponent es el Modulo principal, bootstrap solo se pone en el modulo principal
})
export class AppModule { }
