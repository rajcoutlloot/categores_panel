import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddNewServiceService {
  constructor( private http : HttpClient) { }

  generatenewCategories(data){
    return this.http.post('http://174.138.121.172/category/temp/addCategory',JSON.stringify(data));
  }
}
