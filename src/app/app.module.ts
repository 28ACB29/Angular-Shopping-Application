import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

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
    HttpClientModule,
    ProductsModule
  ],
  providers: [],
  bootstrap:
  [
    AppComponent
  ]
})
export class AppModule { }