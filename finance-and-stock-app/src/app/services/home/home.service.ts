import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Customer} from "../../model/customer.model";
import {environment} from "../../../environments/environment.development";
import {AppConstants} from "../../constants/app.constants";
import {Product} from "../../model/product.model";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http:HttpClient) { }

  validateRegister(customer:Customer){
    window.sessionStorage.setItem("userdetails", JSON.stringify(customer));
    return this.http.get(environment.rootUrl + AppConstants.REGISTER_API_URL, {
      observe: 'response',
      withCredentials: true
    });
  }
  // ABOUT

  // CONTACT

  // REGISTER

  updateProduct(product:Product) {

  }
}
