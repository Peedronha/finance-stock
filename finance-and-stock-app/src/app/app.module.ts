import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HTTP_INTERCEPTORS, HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { XhrInterceptor } from './interceptors/app.request.interceptor';
import { AuthGuard } from './routeguards/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LogoutComponent } from './components/logout/logout.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotComponent } from './components/forgot/forgot.component';
import {SobreComponent} from "./components/about/sobre.component";
import {ContactComponent} from "./components/contact/contact.component";
import { ThemeComponent} from "./components/theme/theme.component";
import { NewPasswordComponent } from './components/new-password/new-password.component';
import { TokenComponent } from './components/token/token.component';
import { StockComponent } from './components/stock/stock.component';
import { DetailsComponent } from './components/details/details.component';
import { AddProductComponent } from './components/dashboard/add-product/add-product.component';


import {FlexLayoutModule} from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from "@angular/material/card";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        LoginComponent,
        DashboardComponent,
        LogoutComponent,
        HomeComponent,
        RegisterComponent,
        ForgotComponent,
        ThemeComponent,
        NewPasswordComponent,
        TokenComponent,
        StockComponent,
        DetailsComponent,
        AddProductComponent,
        SobreComponent,
        ContactComponent,
    ],
  imports: [
     BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    NgbModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'XSRF-TOKEN',
      headerName: 'X-XSRF-TOKEN',
    }),
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass : XhrInterceptor,
      multi : true
    }, AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
