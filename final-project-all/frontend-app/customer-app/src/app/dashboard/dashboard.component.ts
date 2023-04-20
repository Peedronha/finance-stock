import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user = new User();

  constructor() {

  }

  ngOnInit(): void {
      if(sessionStorage.getItem('userdetails')) {
        this.user = JSON.parse(sessionStorage.getItem('userdetails') || "");
      }
  }

}
