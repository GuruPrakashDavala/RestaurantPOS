import { Component, OnInit, ViewEncapsulation } from '@angular/core';
//import { Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { OrderService } from '../shared/orderservice.service';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css'],
  //encapsulation: ViewEncapsulation.None
})
export class LoginpageComponent implements OnInit {
  form: FormGroup;
  error;
  //submitted = false;
  // form = this.fb.group({
  //   username:['',Validators.required]
  // })
  submit() {
    if (this.form.valid) {
      console.log(this.form.value);
      //this.submitEM.emit(this.form.value);
      if (this.form.value.username  && this.form.value.password == 'cashier') {
        //alert();
        this.service.isLogin = true;
        this.service.isCashier = true;
        this.router.navigate(['/orderpanel']);
      }
      if (this.form.value.username && this.form.value.password == 'admin') {
        this.service.isLogin = true;
        this.service.isAdmin = true;
        this.router.navigate(['/allorders']);
      }
      if(this.form.value.username && this.form.value.password == 'server'){
        this.service.isLogin = true;
        this.service.isServer = true;
        this.router.navigate(['/kitchenorder']);
      }
      //alert('routing');
      else{
        this.error = "Invalid Name or Password";
        //alert('Wrong User Name and Password');
      }
    }
  }
  // @Input() error: string | null;

  // @Output() submitEM = new EventEmitter();
  constructor(private fb: FormBuilder, private service: OrderService,
    private router: Router, ) {
    this.service.isLogin = false;
    this.service.isCashier = false;
    this.service.isAdmin = false;
    this.service.isServer = false;
    document.body.style.background = 'rgb(23, 162, 184)';
  }
  ngOnInit() {
    //alert();
    this.error = "";
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  ngOnDestroy() {
    document.body.style.background = '#f2f1f0';
  }

}
