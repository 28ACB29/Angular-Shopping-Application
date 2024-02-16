import { Directive, OnInit, ViewContainerRef } from '@angular/core';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@Directive({
  selector: '[appProductHost]',
  standalone: true
})
export class ProductHostDirective implements OnInit
{
  ngOnInit(): void
  {
    const productRef = this.vc.createComponent(ProductDetailComponent);
    productRef.setInput('product',
    {
      name: 'Optical mouse',
      price: 130
    });
  }

  constructor(private vc: ViewContainerRef)
  {
    
  }

}
