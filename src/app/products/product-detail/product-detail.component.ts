import { Component, Input, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';

import { AuthService } from '../../auth/auth.service';
import { CartService } from '../../cart/cart.service';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})

export class ProductDetailComponent implements OnInit, OnChanges
{
  @Input() name = "";
  @Output() bought = new EventEmitter();
  @Output() deleted = new EventEmitter();
  @Input() product: Product | undefined;
  @Input() id = -1;
  product$: Observable<Product> | undefined;
  price: number | undefined;

  constructor(private productService: ProductsService, public authService: AuthService, private route: ActivatedRoute, private cartService: CartService)
  {
    
  }

  ngOnInit(): void
  {
    this.product$ = this.route.data.pipe(switchMap(data =>
      of(data['product'])));
  }

  ngOnChanges(changes: SimpleChanges): void
  {
    this.product$ = this.productService.getProduct(this.id);
  }

  buy(product: Product)
  {
    this.cartService.addProduct(product);
  }

  changePrice(product: Product, price: number)
  {
    this.productService.updateProduct(product.id, price).subscribe(() =>
    {
      alert(`The price of ${product.name} was changed!`);
    });
  }

  remove(product: Product)
  {
    this.productService.deleteProduct(product.id).subscribe(() =>
    {
      this.deleted.emit();
    });
  }
}
