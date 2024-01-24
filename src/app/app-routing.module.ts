import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InicioComponent} from "./components/inicio/inicio.component";
import {FriosComponent} from "./components/frios/frios.component";
import {CalientesComponent} from "./components/calientes/calientes.component";
import {OperadoresComponent} from "./components/operadores/operadores.component";
import {SwitchMapComponent} from "./components/switch-map/switch-map.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: "full",
    redirectTo: 'inicio'
  },
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'frios',
    component: FriosComponent
  },
  {
    path: 'calientes',
    component: CalientesComponent
  },
  {
    path: 'operadores',
    component: OperadoresComponent
  },
  {
    path: 'switchmap',
    component: SwitchMapComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
