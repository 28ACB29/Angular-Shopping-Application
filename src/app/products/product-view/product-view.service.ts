import { Injectable } from '@angular/core';
import { ProductsService } from '../products.service';

@Injectable()

export class ProductViewService
{

  constructor(private productService: ProductsService)
  {
    
  }
}
