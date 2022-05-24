import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyDataService {

  constructor(public http : HttpClient) { }

  getUsersNames(){
   // var userNames =  [{'Name':'Sandepp', 'Phone': '96776766', 'Email':'sandeep@gamil.com'},{'Name':'Diynash', 'Phone': '7676767', 'Email':'divyansh@gamil.com'} ]
   var userNames = this.http.get('https://reqres.in/api/users?page=2');
   return userNames;
  }
}
