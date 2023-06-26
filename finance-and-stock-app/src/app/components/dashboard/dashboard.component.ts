import { Component, OnInit } from '@angular/core';
import { User} from "../../model/user.model";
import {Product} from "../../model/product.model";
import {DashboardService} from "../../services/dashboard/dashboard.service";
import {Router} from "@angular/router";
import {getCookie} from "typescript-cookie";
import {group} from "@angular/animations";
import {isNumber} from "@ng-bootstrap/ng-bootstrap/util/util";
import {Observable} from "rxjs";
import {HttpResponse} from "@angular/common/http";
import {ProductService} from "../../services/product/product.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css', '../../../styles.css']
})
export class DashboardComponent implements OnInit {
  public page = 1;
  public pageSize = 10;
  searchText = "";
  public listOfProducts: Array<Product> = [];
  products: Product[] | any = this.listOfProducts;
  user = new User();

  showEdit: boolean = false;
  displayStyle = "none";

  genericProduct: Product | any;

  ngOnInit(): void {

    this.listOfProducts.push(new Product({
      description: "Product 2",
      number: 67890,
      price: 19.99,
      quantityInStock: 50,
      packingVolume: "20x20x20",
      registrationDate: new Date(),
      productId: 2
    }));

    this.listOfProducts.push(new Product({
      description: "Product 1",
      number: 67890,
      price: 19.99,
      quantityInStock: 50,
      packingVolume: "20x20x20",
      registrationDate: new Date(),
      productId: 1
    }));
    this.listOfProducts.push(new Product({
      description: "Product 3",
      number: 67890,
      price: 19.99,
      quantityInStock: 50,
      packingVolume: "20x20x20",
      registrationDate: new Date(),
      productId: 1
    }));
    if (sessionStorage.getItem('userdetails')) {
      this.user = JSON.parse(sessionStorage.getItem('userdetails') || "");
    }
    this.Search();
  }

  constructor(private dashboardService: DashboardService, private router: Router, private productService: ProductService) {
  }
  openPopupEdit(id:number, category:string) {

    this.displayStyle = "block";
    this.showEdit = true;



    switch (true){

      case category == "product":{
        this.genericProduct =  new Product({
          description: "Product 3",
          number: 67890,
          price: 19.99,
          quantityInStock: 50,
          packingVolume: "20x20x20",
          registrationDate: new Date(),
          productId: 1
        })//(Product) this.dashboardService.getProductById(id);
        break;
      }
      case category == "dashboard":{
        break;
      }
      case category == "finance":{
        break;
      }
      default:{
        break;
      }
    }

  }
  closePopupEdit() {
    this.displayStyle = "none";
    this.showEdit = true;
  }
  Search() {
    if (this.searchText !== "") {
      const searchValue = this.searchText.toLowerCase();
      this.listOfProducts = this.listOfProducts.filter((product: Product) => {
        return (
          product.description.toLowerCase().includes(searchValue) ||
          product.number.toString().includes(searchValue) ||
          product.packingVolume.toLowerCase().includes(searchValue)
        );
      });
    } else {
      this.listOfProducts = this.products;
      // this.dashboardService.getStock().subscribe(responseData => {
      //   // window.sessionStorage.getItem("Authorization");
      //   this.listOfProducts = responseData.body as Product[];
      // });
    }
  }

  editItem(product: Product) {
      if (this.productService.updateProduct()){
        this.closePopupEdit();
      }
  }

  deleteItem(product: Product) {
    this.productService.deleteItemById(product.productId);
  }
}
