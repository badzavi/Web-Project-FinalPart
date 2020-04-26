import { Component, OnInit } from '@angular/core';

import { ShopService } from "../shop.service";
import { Product } from '../products/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products:Product[];
  constructor(private shopService:ShopService) { }

  ngOnInit(): void {
    this.getCartProducts();
  }

  getCartProducts() {
    this.shopService.getCartProducts().
      subscribe(products => this.products = products);
  }

  deleteCartProduct(id: number) {
    this.products = this.products.filter(product => product.id !== id);
    this.shopService.deleteCartProduct(id).subscribe();
  }

}
