import { Component } from '@angular/core';
import {User} from "../../model/user.model";
import {ForgotService} from "../../services/forgot/forgot.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {getCookie} from "typescript-cookie";

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.css']
})
export class NewPasswordComponent {
  model = new User();
  toggleMessage = false;
  item = {
    password_1: '',
    password_2: ''
  }
  constructor(private forgotService: ForgotService, private router: Router) { }

  ngOnInit(): void { }

  checkForm(passwordForm: NgForm) {

    if (passwordForm.value.password_1 == passwordForm.value.password_2 ){
      //FAZER POST PARA UPDATE DA SENHA
      this.toggleMessage = false
    }
    else{
      this.toggleMessage = true
    }
    passwordForm.resetForm()
  }
}
