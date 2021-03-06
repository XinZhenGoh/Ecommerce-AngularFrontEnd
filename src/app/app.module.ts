import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SignupComponent} from './components/signup/signup.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {authInterceptorProviders} from './services/auth.interceptor';
import {ProductListComponent} from './components/product-list/product-list.component';
import {ProductService} from './services/product.service';
import {CategoryComponent} from './components/category/category.component';
import {SearchComponent} from './components/search/search.component';
import {UpdateProfileComponent} from './components/update-profile/update-profile.component';
import { HomeComponent } from './components/home/home.component';
import { CartStatusComponent } from './components/cart-status/cart-status.component';
import { NagivationComponent } from './components/nagivation/nagivation.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    RegisterComponent,
    ProductListComponent,
    CategoryComponent,
    SearchComponent,
    UpdateProfileComponent,
    HomeComponent,
    CartStatusComponent,
    NagivationComponent,
    CartDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [authInterceptorProviders, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
