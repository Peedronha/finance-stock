import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConstants } from 'src/app/contants/app.constants';
import { Contact } from 'src/app/model/contact.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http:HttpClient) { }

  saveMessage(contact : Contact){
    var contacts = [];
    contacts.push(contact);
    return this.http.post(AppConstants.CONTACT_API_URL,contacts,{ observe: 'response'});
  }

}
