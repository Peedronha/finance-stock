import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/model/customer.model';
import { HomeService } from 'src/app/services/home/home.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', '../../../styles.css']
})
export class RegisterComponent implements OnInit {

  customer = new Customer();

  constructor(private homeService : HomeService) { }

  ngOnInit(): void {
    this.customer = JSON.parse(sessionStorage.getItem('userdetails')!);
  }

}
