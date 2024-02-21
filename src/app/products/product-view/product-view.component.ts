import { Component } from '@angular/core';
import { ProductViewService } from './product-view.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.css'
})

export class ProductViewComponent
{

  constructor(private productviewService: ProductViewService)
  {
    
  }

}
