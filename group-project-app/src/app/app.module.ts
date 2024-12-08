import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { appRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'; // Importa HomeComponent

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent // Declara HomeComponent aquí
  ],
  imports: [
    BrowserModule,
    appRoutes
  ],
  providers: [],
  bootstrap: [AppComponent] // Define AppComponent como el componente inicial
})
export class AppModule {}
