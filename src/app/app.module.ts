import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { CartComponent } from './cart/cart.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductsModule } from './products/products.module';

@NgModule({
  declarations:
  [
    AppComponent,
    CartComponent,
    PageNotFoundComponent
  ],
  imports:
  [
    AppRoutingModule,
    AuthModule,
    BrowserModule,
    CommonModule,
    HttpClientModule,
    ProductsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap:
  [
    AppComponent
  ]
})
export class AppModule { }