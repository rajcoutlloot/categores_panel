import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SubcategoriesServiceService {
  constructor(private http : HttpClient) { }
  getsubcategorieslist(id){
    let data = {
      "categoryId":id
    }
    return this.http.post('http://174.138.121.172/category/getSubCategories',JSON.stringify(data));
  }
}
