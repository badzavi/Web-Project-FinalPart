import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';

import { ShopService } from "src/app/shop.service";
import { Product } from '../product';


@Component({
  selector: 'app-product-change',
  templateUrl: './product-change.component.html',
  styleUrls: ['./product-change.component.css']
})
export class ProductChangeComponent implements OnInit {
  @Input() product:Product;
  constructor(
    private shopService:ShopService,
    private location: Location,
  ) { }

  ngOnInit(): void {
  }

  save(): void {
    this.shopService.updateProduct(this.product)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

  cancel():void {
    this.goBack();
  }

}
