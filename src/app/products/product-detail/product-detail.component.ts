import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from '../product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})

export class ProductDetailComponent implements OnChanges
{
  @Input() name = "";
  @Output() bought = new EventEmitter();
  @Input() product: Product | undefined;
  @Input() id = -1;
  product$: Observable<Product> | undefined;

  ngOnChanges(changes: SimpleChanges): void
  {
    const product = changes['product'];
    if (!product.isFirstChange())
    {
      const oldValue = product.previousValue.name;
      const newValue = product.currentValue.name;
      console.log(`Product changed from ${oldValue} to ${newValue}`);
    }
  }

  buy()
  {
    this.bought.emit();
  }
}
