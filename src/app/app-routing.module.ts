import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactosComponent } from './pages/contactos/contactos.component';
import { DetalleempleosComponent } from './pages/detalleempleos/detalleempleos.component';
import { EmpleosComponent } from './pages/empleos/empleos.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'nosotros', component: NosotrosComponent},
  { path: 'empleos', component: EmpleosComponent},
  { path: 'empleos/:id_anuncio', component: DetalleempleosComponent},
  { path: 'contactos', component: ContactosComponent},
  //{ path: 'dashboard', component: DashboardComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
