import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConstants } from 'src/app/constants/app.constants';

import { environment } from './../../../environments/environment.development';
import {Observable} from "rxjs";
import {Customer} from "../../model/customer.model";
import {Product} from "../../model/product.model";

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http:HttpClient) { }

  // PRODUCT
  getProduct(){
    return this.http.get<Product[]>(environment.rootUrl + AppConstants.PRODUCT_API_URL, {
      observe: 'response', withCredentials: true
    })
  }
  // FINANCE
  getFinance() {
    return this.http.get(environment.rootUrl + AppConstants.FINANCE_API_URL, {
      observe: 'response', withCredentials: true
    })
  }

  // STOCK
  getStock() {
    return this.http.get(environment.rootUrl + AppConstants.PRODUCT_API_URL, {
      observe: 'response', withCredentials: true
    })
  }

  // STOCK
  getListUser() {
    return this.http.get(environment.rootUrl + AppConstants.LIST_USER_API_URL, {
      observe: 'response', withCredentials: true
    })
  }

  // SETTINGS
  getSettings() {
    return this.http.get(environment.rootUrl + AppConstants.SETTINGS_API_URL, {
      observe: 'response', withCredentials: true
    })
  }

}
