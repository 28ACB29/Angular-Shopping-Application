import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

import { Product } from '../products/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})

export class CartComponent
{

  cartForm = new FormGroup({
    products: new FormArray<FormControl<number>>([])
  });
  cart: Product[] = [];


}
