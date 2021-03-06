import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  createData(data){
    return this.http.post(environment.apiUrl+'/api/register/', data);
  }

  logindata(data){
    return this.http.post(environment.apiUrl+'/api/login/', data);
  }

}
