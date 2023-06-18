import { Component, OnInit } from '@angular/core';
import { User} from "../../model/user.model";
import {Product} from "../../model/product.model";
import {DashboardService} from "../../services/dashboard/dashboard.service";
import {Router} from "@angular/router";
import {getCookie} from "typescript-cookie";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css', '../../../styles.css']
})
export class DashboardComponent implements OnInit {
  searchText = "";
  listOfProducts: Product[] | any = [];
  products: Product[] | any = this.listOfProducts;
  user = new User();

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
    if(sessionStorage.getItem('userdetails')) {
      this.user = JSON.parse(sessionStorage.getItem('userdetails') || "");
    }
    this.Search();
  }
  constructor(private dashboardService: DashboardService, private router: Router){ }
  Search(){
    if (this.searchText !== "") {
      const searchValue = this.searchText.toLowerCase();
      this.listOfProducts = this.listOfProducts.filter((product: Product) => {
        return (
          product.description.toLowerCase().includes(searchValue) ||
          product.number.toString().includes(searchValue) ||
          product.packingVolume.toLowerCase().includes(searchValue)
        );
      });
    }
    else {
      this.listOfProducts = this.products;
      // this.dashboardService.getStock().subscribe(responseData => {
      //   // window.sessionStorage.getItem("Authorization");
      //   this.listOfProducts = responseData.body as Product[];
      // });
    }
  }
}
/*
* <app-header></app-header>
<div class="container-fluid,
container-sm
container-md
container-lg
container-xl">
  <h2 class="main-content text-center">
    <p>DASHBOARD</p>
  </h2>
  <div class="container text-center mt-4">
    <input class="form-control mt-2 mb-2" type="text" [(ngModel)]="searchText" (input)="Search()"
           placeholder="Search by name"/>
    <table class="table table-striped table-bordered table-sm row-border hover" id="datatableexample">
      <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Quantity</th>
        <th>Balance</th>
      </tr>
      </thead>
      <tbody>

      <tr *ngFor="let group of listOfProducts">
        <td>{{group.productId}}</td>
        <td>{{group.description}}</td>
        <td>{{group.quantityInStock}}</td>
        <td>{{group.number}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</div>

* */
