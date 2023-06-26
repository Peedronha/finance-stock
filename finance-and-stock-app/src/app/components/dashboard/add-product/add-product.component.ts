import {Component, OnInit} from '@angular/core';
import {Product} from "../../../model/product.model";
import {NgForm} from "@angular/forms";
import {getCookie} from "typescript-cookie";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit{

  product: Product | any;

  ngOnInit(): void {

  }
  constructor() {

  }
  submitForm(registerForm: NgForm){
    // this.homeService.validateRegister(this.customer).subscribe(
    //
    //   responseData => {
    //
    //     window.sessionStorage.setItem("Authorization",responseData.headers.get('Authorization')!);
    //     this.customer = <any> responseData.body;
    //     this.customer.authStatus = 'AUTH';
    //     window.sessionStorage.setItem("userdetails",JSON.stringify(this.customer));
    //     let xsrf = getCookie('XSRF-TOKEN')!;
    //     window.sessionStorage.setItem("XSRF-TOKEN",xsrf);
    //     this.router.navigate(['dashboard']);
    //   });
  }
}
