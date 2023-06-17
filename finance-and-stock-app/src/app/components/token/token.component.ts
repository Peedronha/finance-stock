import { Component } from '@angular/core';
import {User} from "../../model/user.model";
import {ForgotService} from "../../services/forgot/forgot.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {getCookie} from "typescript-cookie";


@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.css']
})
export class TokenComponent {

  model = new User();

  constructor(private forgotService: ForgotService, private router: Router) { }

  ngOnInit(): void { }

  getToken(passwordForm: NgForm) {
    //
    // this.forgotService.validateToken().subscribe(
    //   responseData => {
    //
    //     window.sessionStorage.setItem("Authorization",responseData.headers.get('Authorization')!);
    //     this.model = <any> responseData.body;
    //     this.model.authStatus = 'AUTH';
    //     window.sessionStorage.setItem("userdetails",JSON.stringify(this.model));
    //     let xsrf = getCookie('XSRF-TOKEN')!;
    //     window.sessionStorage.setItem("XSRF-TOKEN",xsrf);
    //     this.router.navigate(['dashboard']);
    //
    //   });

  }
}
