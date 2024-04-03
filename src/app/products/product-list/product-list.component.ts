import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  providers: [ProductsService]
})

export class ProductListComponent implements AfterViewInit,  OnDestroy, OnInit
{
  selectedProduct: Product | undefined;
  @ViewChild(ProductDetailComponent) productDetail: ProductDetailComponent | undefined;
  products$: Observable<Product[]> | undefined;
  private productsService: ProductsService;
  private productsSub: Subscription | undefined;

  constructor(private productService: ProductsService)
  {
    this.productsService = new ProductsService();
  }

  ngAfterViewInit(): void
  {
    if (this.productDetail)
    {
      console.log(this.productDetail.product);
    }
  }

  ngOnDestroy(): void
  {
    this.productsSub?.unsubscribe();
  }

  ngOnInit(): void
  {
    this.getProducts();
  }

  onBuy()
  {
    window.alert(`You just bought ${this.selectedProduct?.name}!`);
  }

  private getProducts()
  {
    this.products$ = this.productService.getProducts();
  }
}
