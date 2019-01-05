import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddNewSubcategoriesServiceService {

  constructor(private http : HttpClient ) { }
  addSubCategories(data){
      return this.http.post('http://174.138.121.172/category/temp/addSubCategory',JSON.stringify(data));        
  }
}
