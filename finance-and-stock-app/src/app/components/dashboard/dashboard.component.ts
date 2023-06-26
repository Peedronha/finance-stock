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
import {Finance} from "../../model/finance.model";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css', '../../../styles.css']
})
export class DashboardComponent implements OnInit {

  public page = 1;
  public pageStock = 1;
  public pageFinance = 1;

  public pageSize = 10;

  searchText = "";
  public listOfProducts: Array<Product> = [];
  public listOfFinances: Array<Finance> = [];

  products: Product[] | any = this.listOfProducts;

  user = new User();

  showEdit: boolean = false;
  displayStyle = "none";

  genericProduct: Product | any;

  ngOnInit(): void {
    if (sessionStorage.getItem('userdetails')) {
      this.user = JSON.parse(sessionStorage.getItem('userdetails') || "");
    }
    this.Search();
    this.SearchFinance();
  }

  constructor(private dashboardService: DashboardService, private router: Router, private productService: ProductService) {
  }
  openPopupEdit(id:number, category:string) {

    this.displayStyle = "block";
    this.showEdit = true;

    switch (true){

      case category == "product":{
      this.genericProduct = this.dashboardService.getProductById(id).subscribe({
      });
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
      this.dashboardService.getStock().subscribe(responseData => {
        window.sessionStorage.getItem("Authorization");
        this.listOfProducts = responseData.body as Product[];
      });
    }
  }
  SearchFinance() {
    if (this.searchText !== "") {
      const searchValue = this.searchText.toLowerCase();
      this.listOfFinances = this.listOfFinances.filter((finance: Finance) => {
        return (
          finance.product.description.toLowerCase().includes(searchValue) ||
          finance.unitPrice.toString().includes(searchValue) ||
          finance.balance.toString().includes(searchValue)
        );
      });
    }
    else {
      this.dashboardService.getFinance().subscribe(responseData => {
        window.sessionStorage.getItem("Authorization");
        this.listOfFinances = responseData.body as Finance[];
      });
    }
  }

  editItem(product: Product) {
      this.productService.updateProduct(product).subscribe({

      })
    this.closePopupEdit();
  }

  deleteItem(product: Product) {
    this.productService.deleteItemById(product.productId);
  }
}
