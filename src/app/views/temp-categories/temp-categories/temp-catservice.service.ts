import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TempCatserviceService {
  constructor( private http : HttpClient) { }
  
  tempcategories(){
    return this.http.get('http://174.138.121.172/category/temp/allCategories');
  }
  removeCategories(data){
    return this.http.post('http://174.138.121.172/category/temp/removeTempCategory',JSON.stringify(data)); 
  }
  

}
