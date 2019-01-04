import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AttributesServiceService {

  constructor(private http: HttpClient) { }
  getattributeslist(id){
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'text/plain'
      })
    };
    let data = {
      "categoryId":id
    }
    return this.http.post('http://174.138.121.172/category/getCategoryAttributes',JSON.stringify(data),httpOptions);
  }
}
