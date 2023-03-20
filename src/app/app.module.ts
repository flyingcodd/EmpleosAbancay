import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { EmpleosComponent } from './pages/empleos/empleos.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { NavComponent } from './components/nav/nav.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavinfoComponent } from './components/navinfo/navinfo.component';
import { ContactosComponent } from './pages/contactos/contactos.component';
import { DetalleempleosComponent } from './pages/detalleempleos/detalleempleos.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    EmpleosComponent,
    NosotrosComponent,
    NavComponent,
    SidebarComponent,
    FooterComponent,
    NavinfoComponent,
    ContactosComponent,
    DetalleempleosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
