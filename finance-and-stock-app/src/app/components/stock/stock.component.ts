import { Component } from '@angular/core';
import {Product} from "../../model/product.model";
import {User} from "../../model/user.model";
import {DashboardService} from "../../services/dashboard/dashboard.service";
import {Router} from "@angular/router";
import {ProductService} from "../../services/product/product.service";

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent {

  public listOfProducts: Array<Product> = [];
  products: Product[] | any = this.listOfProducts;
  user = new User();

  searchText = "";

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
    }));    this.listOfProducts.push(new Product({
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
    }));    this.listOfProducts.push(new Product({
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
    }));    this.listOfProducts.push(new Product({
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
    }));    this.listOfProducts.push(new Product({
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
    }));    this.listOfProducts.push(new Product({
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
    }));    this.listOfProducts.push(new Product({
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
    }));    this.listOfProducts.push(new Product({
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
    }));    this.listOfProducts.push(new Product({
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
    }));    this.listOfProducts.push(new Product({
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
  key = 'id';
  reverse: boolean = false;
  p:number = 1;
  sort(key:string){
    this.key = key;
    this.reverse = !this.reverse;
  }
}
