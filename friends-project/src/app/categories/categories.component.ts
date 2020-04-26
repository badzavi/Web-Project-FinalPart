import { Component, OnInit } from '@angular/core';

import { Category } from "./category";
import { ShopService } from "../shop.service";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Category[];

  constructor(private shopService:ShopService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.shopService.getCategories()
      .subscribe(categories => this.categories = categories);
  }

}
