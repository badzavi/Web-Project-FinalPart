import { Component, OnInit } from '@angular/core';

import { AuthService } from "../auth.service";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private authService:AuthService,
  ) { }

  ngOnInit(): void {
  }
  onSubmit(loginForm: NgForm) {
    console.log(loginForm.value)
    // console.log(form.value)
    // if (this.authService.login(form.value.username, form.value.password)){
    //   alert('WELCOME ADMIN');
    //   this.goBack();
    // }else {
    //   alert('PLEASE TRY AGAIN');
    // }
    let {firstName, lastName, username, password} = loginForm.value;
    console.log(username, password);
    this.authService.register(firstName, lastName, username, password)
      .subscribe(res => {
        alert('created succesfully')
    })
  }
}
