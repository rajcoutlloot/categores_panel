import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AttributesServiceService {

  constructor(private http: HttpClient) { }
  getattributeslist(id){
    let data = {
      "categoryId":id
    }
    return this.http.post('http://174.138.121.172/category/getCategoryAttributes',JSON.stringify(data));
  }
}
