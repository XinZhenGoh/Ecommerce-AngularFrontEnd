import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignupComponent} from './components/signup/signup.component';
import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {ProductListComponent} from './components/product-list/product-list.component';
import {ProductHomepageComponent} from './components/product-homepage/product-homepage.component';


const routes: Routes = [
  { path: 'search/:keyword', component: ProductListComponent},
  { path: 'upload', component: SignupComponent},
  { path: 'login', component: LoginComponent},
  { path: 'signUp', component: RegisterComponent},
  { path: 'home', component: ProductListComponent},
  { path: 'category/:id', component: ProductListComponent},
  { path: 'category', component: ProductListComponent},
  { path: 'products', component: ProductListComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', redirectTo: '', pathMatch: 'full'},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
