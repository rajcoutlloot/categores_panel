import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {
  constructor(public http: HttpClient) { }
  getallCategorieslist(){
    return this.http.get('http://174.138.121.172/category/allCategories');
  }

  addtotempCategories(id){
    let data = {
      "categoryId":id
    }
    return this.http.post('http://174.138.121.172/category/copyMainToTempCategory',JSON.stringify(data));

  }

}
