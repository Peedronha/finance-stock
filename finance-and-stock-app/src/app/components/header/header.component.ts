import {Component, Input, OnInit} from '@angular/core';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', '../../../styles.css']
})
export class HeaderComponent implements OnInit {

  @Input() deviceXS: boolean | any;

  user = new User();

  selectedTheme: string | undefined;
  constructor() {
    this.selectedTheme = localStorage.getItem('selectedTheme') || 'light';
    document.documentElement.setAttribute('data-theme', this.selectedTheme);
  }

  toggleTheme(isOtherTheme: boolean): void {
    this.selectedTheme = isOtherTheme ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', this.selectedTheme);
    localStorage.setItem('selectedTheme', this.selectedTheme);
  }
  ngOnInit(): void {
    if(sessionStorage.getItem('userdetails')) {
      this.user = JSON.parse(sessionStorage.getItem('userdetails')!);
    }
  }

}
/*
* <div data-navigation="container" class="i-top-header">
  <div class="wrapper top-section">
    <div class="hleft"><a class="logo selfLogo" [routerLink]="user.authStatus!='AUTH' ? ['/home'] : ['/dashboard']"><img alt="logo"
          src="../../../assets/images/logo_sem_fundo.png"></a>
    </div>
    <div class="mnav_hb hide">
      <div class="hamburger"><span class="line"></span><span class="line"></span><span class="line"></span></div>
    </div>
    <nav class="hright dnav">
      <ul>

        <li *ngIf="user.authStatus!='AUTH'" routerLinkActive="active"><a routerLink="/about">About</a></li>
        <li *ngIf="user.authStatus!='AUTH'" routerLinkActive="active"><a routerLink="/contact">Contact</a></li>
        <li *ngIf="user.authStatus!='AUTH'" routerLinkActive="active"><a routerLink="/register">Register</a></li>
        <li *ngIf="user.authStatus!='AUTH'" routerLinkActive="active"><a routerLink="/login">Login</a></li>

        <li *ngIf="user.authStatus=='AUTH'" routerLinkActive="active"><a routerLink="/dashboard">Dashboard</a></li>
        <li *ngIf="user.authStatus=='AUTH'" routerLinkActive="active"><a routerLink="/finance">Finance</a></li>
        <li *ngIf="user.authStatus=='AUTH'" routerLinkActive="active"><a routerLink="/stock">Stock</a></li>
        <li *ngIf="user.authStatus=='AUTH'" routerLinkActive="active"><a routerLink="/config">Settings</a></li>
        <li *ngIf="user.authStatus=='AUTH'" routerLinkActive="active"><a routerLink="/logout">Logout</a></li>
        <li><app-theme></app-theme></li>
      </ul>
    </nav>
  </div>
</div>
<router-outlet></router-outlet>

*
* */
