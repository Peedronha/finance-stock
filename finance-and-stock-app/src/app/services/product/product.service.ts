import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  updateProduct() {
    alert("salvando produto");
    return true;
  }
  deleteItemById(id:number){

  }
}
