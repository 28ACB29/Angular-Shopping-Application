import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent
{
  @Input() name = "";
  @Output() bought = new EventEmitter();

  buy()
  {
    this.bought.emit();
  }
}
