import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaisesComponent } from './pages/paises/paises.component';
import { ClientesComponent } from './pages/clientes/clientes.component';

const routes: Routes = [
  { path: 'paises', component: PaisesComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: '', redirectTo: '/paises', pathMatch: 'full' }, // Redirección por defecto
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }