import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
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
    MatButtonModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatToolbarModule,
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