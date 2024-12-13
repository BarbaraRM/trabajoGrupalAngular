import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'; // Importa HomeComponent
import {TransactionsComponent} from './transactions/transactions.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent, // Declara HomeComponent aquí
    TransactionsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent] // Define AppComponent como el componente inicial
})
export class AppModule {}
