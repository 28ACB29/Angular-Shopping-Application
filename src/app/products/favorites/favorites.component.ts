import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})

export class FavoritesComponent implements OnInit
{

  products$: Observable<Product[]> | undefined;

  constructor(private productService: ProductsService)
  {
    
  }

  ngOnInit(): void
  {
    this.products$ = this.productService.getProducts();
  }

}
