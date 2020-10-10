import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { CartoesComponent } from './cartoes/cartoes.component';
import { FormsModule } from '@angular/forms';
import { SqrtPipe } from './sqrt.pipe';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http'

import { MyService } from './my.service'
import { CurrencyMaskModule } from "ng2-currency-mask";


@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    CartoesComponent,
    SqrtPipe,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CurrencyMaskModule
  ],
  providers: [MyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
