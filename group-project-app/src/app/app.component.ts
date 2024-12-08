import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  template: '<router-outlet></router-outlet>', // Renderiza los componentes según las rutas
  styleUrls: ['./app.component.scss'],
  imports: [RouterModule]
})
export class AppComponent {}
