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
  listOfProducts: any = [] ;

  user = new User();

  ngOnInit(): void {
    if(sessionStorage.getItem('userdetails')) {
      this.user = JSON.parse(sessionStorage.getItem('userdetails') || "");
    }
    this.Search();
  }
  constructor(private dashboardService: DashboardService, private router: Router){ }
  Search(){
    // alert(this.searchText)
    if(this.searchText!== ""){
      let searchValue = this.searchText.toLocaleLowerCase();

      this.listOfProducts = this.listOfProducts.filter((contact:any) =>{
        return contact.name.toLocaleLowerCase().match(searchValue )
          ;
        // you can keep on adding object properties here

      });

      //console.log(this.listOfProducts);
    }
    else {
      this.dashboardService.getStock().subscribe(responseData => {
        // window.sessionStorage.getItem("Authorization");
        this.listOfProducts = <Product> responseData.body;
      });
    }
  }

}
