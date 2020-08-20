import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {authInterceptorProviders} from './services/auth.interceptor';
import { ProfileUpdateComponent } from './component/profile-update/profile-update.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import {ProductService} from './services/product.service';
import { ProductHomepageComponent } from './components/product-homepage/product-homepage.component';
import { CategoryComponent } from './components/category/category.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    RegisterComponent,
    ProfileUpdateComponent,
    ProductListComponent,
    ProductHomepageComponent,
    CategoryComponent,
    SearchComponent
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
export class AppModule { }
