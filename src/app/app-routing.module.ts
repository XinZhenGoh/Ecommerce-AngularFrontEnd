import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignupComponent} from './components/signup/signup.component';
import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {ProductListComponent} from './components/product-list/product-list.component';
import {HomeComponent} from './components/home/home.component';
import {CartStatusComponent} from './components/cart-status/cart-status.component';
import {UpdateProfileComponent} from './components/update-profile/update-profile.component';
import {CartDetailsComponent} from './components/cart-details/cart-details.component';


const routes: Routes = [
  { path: 'search/:keyword', component: HomeComponent},
  { path: 'cart-details', component: CartDetailsComponent},
  { path: 'upload', component: SignupComponent},
  { path: 'login', component: LoginComponent},
  { path: 'signUp', component: RegisterComponent},
  { path: 'updateAccount', component: UpdateProfileComponent},
  { path: 'home', component: HomeComponent },
  { path: 'category/:name', component: HomeComponent},
  { path: 'category', component: HomeComponent},
  { path: 'products', component: HomeComponent},
  { path: 'cart', component: CartStatusComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', redirectTo: '', pathMatch: 'full'},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
