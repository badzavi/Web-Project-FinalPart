import { Component, OnInit, Input } from '@angular/core';

import { Product } from "./product";
import { ShopService } from "../shop.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @Input() products: Product[];

  constructor(private shopService:ShopService) { }

  ngOnInit(): void {
  }

  // getProducts(): void {
  //   this.shopService.getProducts()
  //     .subscribe(products => this.products = products);
  // }

}
