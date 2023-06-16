import { Component } from '@angular/core';
import {User} from "../../model/user.model";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {getCookie} from "typescript-cookie";
import {ForgotService} from "../../services/forgot/forgot.service";

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent {

  authStatus: string = "";
  model = new User();

  constructor(private forgotService: ForgotService, private router: Router) { }

  ngOnInit(): void { }

  validateEmail(passwordForm: NgForm) {

    this.forgotService.validateForgotDetails(this.model).subscribe(
      responseData => {

        window.sessionStorage.setItem("Authorization",responseData.headers.get('Authorization')!);
        this.model = <any> responseData.body;
        this.model.authStatus = 'AUTH';
        window.sessionStorage.setItem("userdetails",JSON.stringify(this.model));
        let xsrf = getCookie('XSRF-TOKEN')!;
        window.sessionStorage.setItem("XSRF-TOKEN",xsrf);
        this.router.navigate(['dashboard']);

      });

  }
}
