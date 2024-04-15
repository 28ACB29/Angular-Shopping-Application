import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of } from 'rxjs';

import { Product } from './product';

@Injectable({
  providedIn: 'root'
})

export class ProductsService
{

  constructor()
  {
    
  }


  products: Product[] =
  [
      {
        name: 'Webcam',
        price: 100
      },
      {
        name:  'Microphone',
        price: 200
      },
      {
        name: 'Wireless keyboard',
        price: 85
      }
  ];

  getProducts(): Observable<Product[]>
  {
    return of(this.products);
  }

}
