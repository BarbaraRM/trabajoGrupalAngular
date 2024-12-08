import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent }, // Ruta raíz
  { path: 'home', component: HomeComponent }, // Ruta /home
  { path: '**', redirectTo: '' } // Redirige rutas no encontradas a la raíz
];
