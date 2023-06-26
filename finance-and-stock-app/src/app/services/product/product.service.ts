import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment.development";
import {AppConstants} from "../../constants/app.constants";
import {HttpClient} from "@angular/common/http";
import {Product} from "../../model/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  updateProduct(product:Product) {
      return this.http.post(environment.rootUrl + AppConstants.PRODUCT_API_URL, {
        product: Product,
        observe: 'response', withCredentials: true
      })
  }
  deleteItemById(id:number){
    return this.http.delete(environment.rootUrl + AppConstants.PRODUCT_API_URL + id, {
      observe: 'response', withCredentials: true
    })
  }

  saveProduct(product: any) {
    return this.http.post(environment.rootUrl + AppConstants.PRODUCT_API_URL, {
      product: Product,
      observe: 'response', withCredentials: true
    })
  }
}
