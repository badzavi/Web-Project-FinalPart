import { Component, OnInit } from '@angular/core';


import { Category } from '../categories/category';
import { ShopService } from '../shop.service';
import { AuthService } from "../auth.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  categories:Category[];

  constructor(
    private shopService:ShopService,
    public authService:AuthService,
    ) { }

  ngOnInit(): void {
    this.getCategories();
  }
  getCategories(): void {
    this.shopService.getCategories()
      .subscribe(categories => this.categories = categories);
  }
  logout(){
    localStorage.clear();
    this.authService.authorized = false;
    location.reload();
  }

}
