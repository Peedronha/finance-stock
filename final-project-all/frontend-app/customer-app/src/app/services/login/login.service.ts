import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConstants } from 'src/app/contants/app.constants';
import { User } from 'src/app/model/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {

  }

  validateLoginDetails(user: User) {

    window.sessionStorage.setItem("userdetails",JSON.stringify(user));
    return this.http.get(AppConstants.LOGIN_API_URL, {
      observe: 'response',withCredentials: true
    });

  }

}
