import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements AfterViewInit, OnInit
{
  selectedProduct: Product | undefined;
  @ViewChild(ProductDetailComponent) productDetail: ProductDetailComponent | undefined;
  products: Product[] = [];
  private productsService: ProductsService;

  constructor()
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

  ngOnInit(): void
  {
    this.products = this.productsService.getProducts();
  }

  onBuy()
  {
    window.alert(`You just bought ${this.selectedProduct?.name}!`);
  }
}
