import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home/home.service';
import {NgForm} from "@angular/forms";
import {getCookie} from "typescript-cookie";
import {Router} from "@angular/router";
import {Customer} from "../../model/customer.model";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', '../../../styles.css']
})
export class RegisterComponent implements OnInit {

  customer = new Customer();

  constructor(private homeService : HomeService, private router: Router) { }

  ngOnInit(): void {
    this.customer = JSON.parse(sessionStorage.getItem('userdetails')!);
  }
  validateUser(registerForm: NgForm){
    this.homeService.validateRegister(this.customer).subscribe(

      responseData => {

        window.sessionStorage.setItem("Authorization",responseData.headers.get('Authorization')!);
        this.customer = <any> responseData.body;
        this.customer.authStatus = 'AUTH';
        window.sessionStorage.setItem("userdetails",JSON.stringify(this.customer));
        let xsrf = getCookie('XSRF-TOKEN')!;
        window.sessionStorage.setItem("XSRF-TOKEN",xsrf);
        this.router.navigate(['dashboard']);
      });
  }
}
