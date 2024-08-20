import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Subscription, Observable } from 'rxjs';

import { Product } from '../product';
import { ProductsService } from '../products.service';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})

export class ProductListComponent implements AfterViewInit,  OnDestroy, OnInit
{
  selectedProduct: Product | undefined;
  @ViewChild(ProductDetailComponent) productDetail: ProductDetailComponent | undefined;
  products = new MatTableDataSource<Product>([]);
  private productsSub: Subscription | undefined;
  columnNames = ['name', 'price'];
  @ViewChild(MatSort) sort: MatSort | null = null;
  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;

  constructor(private productService: ProductsService)
  {
    ;
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

  onAdd(product: Product)
  {
    this.products.data.push(product);
  }

  onBuy()
  {
    window.alert(`You just bought ${this.selectedProduct?.name}!`);
  }

  onDelete()
  {
    this.products.data = this.products.data.filter(product => product !== this.selectedProduct);
    this.selectedProduct = undefined;
  }

  private getProducts()
  {
    this.productService.getProducts().subscribe(products =>
    {
      this.products = new MatTableDataSource(products);
      this.products.sort = this.sort;
      this.products.paginator = this.paginator;
    });
  }
}
