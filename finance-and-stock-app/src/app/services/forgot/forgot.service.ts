import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../../model/user.model";
import {environment} from "../../../environments/environment.development";
import {AppConstants} from "../../constants/app.constants";

@Injectable({
  providedIn: 'root'
})
export class ForgotService {

  constructor(private http: HttpClient) { }
  validateForgotDetails(user: User) {
    window.sessionStorage.setItem("userdetails", JSON.stringify(user));
    return this.http.get(environment.rootUrl + AppConstants.CUSTOMER_API_URL +"/forgot", {
      observe: 'response',
      withCredentials: true
    });
  }
}
