import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

import { FavoritesComponent } from './favorites/favorites.component';
import { KeyLoggerComponent } from '../key-logger/key-logger.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductsRoutingModule } from './products-routing.module';
import { SortPipe } from './sort.pipe';

@NgModule({
  declarations:
  [
    FavoritesComponent,
    KeyLoggerComponent,
    ProductCreateComponent,
    ProductDetailComponent,
    ProductListComponent,
    ProductViewComponent,
    SortPipe,
  ],
  imports:
  [
    CommonModule,
    FormsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatDialogModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatGridListModule,
    MatInputModule,
    MatListModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatSelectModule,
    MatSortModule,
    MatTableModule,
    ReactiveFormsModule,
    ProductsRoutingModule
  ],
  exports:
  [
    ProductListComponent
  ]
})

export class ProductsModule
{
  
}
