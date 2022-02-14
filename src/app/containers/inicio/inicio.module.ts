import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio.component';
import { InicioRouting } from './inicio.routing';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    InicioRouting,
    HttpClientModule
  ],
  declarations: [InicioComponent]
})
export class InicioModule {}
