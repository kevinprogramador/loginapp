import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './componentes/home-page/home-page.component';
import { LoginPageComponent } from './componentes/login-page/login-page.component';
import { RegistePageComponent } from './componentes/registe-page/registe-page.component';
import { PrivadoPageComponent } from './componentes/privado-page/privado-page.component';
import { NotFoundPageComponent } from './componentes/not-found-page/not-found-page.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { MapsComponent } from './componentes/maps/maps.component';

const routes: Routes = [
  { path : '', redirectTo : '/maps', pathMatch : 'full'},
  {path: '', component: HomePageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'register', component: RegistePageComponent},
  {path: ' privado', component: PrivadoPageComponent},
  {path: 'navbar' , component: NavbarComponent},
  {path : 'maps', component : MapsComponent},
  {path: '**', component: NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
