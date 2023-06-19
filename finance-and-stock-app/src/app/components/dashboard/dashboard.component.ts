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
  public page = 1;
  public pageSize = 10;
  searchText = "";
  public listOfProducts: Array<Product> = [];
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
    if (sessionStorage.getItem('userdetails')) {
      this.user = JSON.parse(sessionStorage.getItem('userdetails') || "");
    }
    this.Search();
  }

  constructor(private dashboardService: DashboardService, private router: Router) {
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
    // // this.router.navigateByUrl(`EditUser/${Product.id}`);
    //
    // const ref = this.dashboardService.open(EditUserComponent, { centered: true });
    // ref.componentInstance.selectedUser = Product;
    //
    // ref.result.then((yes) => {
    //     console.log("Yes Click");
    //
    //     this.setUsersList();
    //   },
    //   (cancel) => {
    //     console.log("Cancel Click");
    //
    //   })
  }

  deleteItem(product: Product) {
    // console.log(Product);
    //
    // this.dashboardService.deleteUserById(Product.id).subscribe(x => this.setUsersList());
  }
}
