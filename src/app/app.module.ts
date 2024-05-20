import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations:
  [
    AppComponent
  ],
  imports:
  [
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