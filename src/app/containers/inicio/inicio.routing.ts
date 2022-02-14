import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: InicioComponent,
  }
];

export const InicioRouting = RouterModule.forChild(ROUTES);
