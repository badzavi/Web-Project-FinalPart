import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { switchMap } from "rxjs/operators";
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

import { ShopService } from 'src/app/shop.service';
import { AuthService } from "src/app/auth.service";
import { Product } from '../product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  update:Boolean = false;
  product$: Observable<Product>;
  
  constructor(
    private shopService:ShopService,
    private route: ActivatedRoute,
    private location: Location,
    public authService:AuthService,
  ) { }

  ngOnInit(): void {
    this.getProductById();
    // console.log(this.product)
  }

  getProductById(): void {
    this.product$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.shopService.getProductById(+params.get('id')))
    );
  }
  delete(product: Product):void {
    this.shopService.deleteProduct(product).subscribe();
    this.goBack();
  }
  goBack(): void {
    this.location.back();
  }
  addProduct(product:Product) {
    this.shopService.addCartProduct(product);
  }
}
