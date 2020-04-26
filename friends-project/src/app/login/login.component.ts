import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { AuthService } from "../auth.service";
import { NgForm } from '@angular/forms';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logged = false;


  constructor(
    private shopService:ShopService,
    private authService: AuthService,
    private location: Location,) { }

  ngOnInit(): void {
    let token = localStorage.getItem('token');
    if (token){
      this.authService.authorized = true;
    }
  }

  onSubmit(loginForm: NgForm) {
    // console.log(form.value)
    // if (this.authService.login(form.value.username, form.value.password)){
    //   alert('WELCOME ADMIN');
    //   this.goBack();
    // }else {
    //   alert('PLEASE TRY AGAIN');
    // }
    let {username, password} = loginForm.value;
    console.log(username, password);
    this.authService.login(username, password)
      .subscribe(res => {
        console.log(res)
        localStorage.setItem('token', res.token);
        localStorage.setItem('user', res.user);
        this.logged = true;
        username = '';
        password = '';
        this.goCategories();
        location.reload();
    })
  }

  goBack(): void {
    this.location.back();
  }
  goCategories(): void {
    this.location.go('/categories');
  }

}
