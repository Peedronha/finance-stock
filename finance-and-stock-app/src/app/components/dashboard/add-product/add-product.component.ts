import {Component, OnInit} from '@angular/core';
import {Product} from "../../../model/product.model";
import {NgForm} from "@angular/forms";
import {getCookie} from "typescript-cookie";
import {Router} from "@angular/router";
import {ProductService} from "../../../services/product/product.service";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product: Product | any;

  ngOnInit(): void {

  }

  constructor(private router: Router, private productService: ProductService) {

  }

  submitForm(registerForm: NgForm) {
    //pode ser this.product falta testar
    this.productService.saveProduct(registerForm).subscribe(
      responseData => {

        // window.sessionStorage.setItem("Authorization",responseData.headers.get('Authorization')!);
        // this.customer = <any> responseData.body;
        // this.customer.authStatus = 'AUTH';
        // window.sessionStorage.setItem("userdetails",JSON.stringify(this.customer));
        // let xsrf = getCookie('XSRF-TOKEN')!;
        // window.sessionStorage.setItem("XSRF-TOKEN",xsrf);
        // this.router.navigate(['dashboard']);
      });
  }
}

