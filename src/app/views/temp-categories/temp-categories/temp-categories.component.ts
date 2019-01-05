import { Component, OnInit } from '@angular/core';
import { TempCatserviceService } from './temp-catservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-temp-categories',
  templateUrl: './temp-categories.component.html',
  styleUrls: ['./temp-categories.component.css']
})
export class TempCategoriesComponent implements OnInit {
  categories:any = [];
  constructor(private tempcatservice: TempCatserviceService ,
              private router : Router          
    ) { }

  ngOnInit() {
    this.gettemporaryCategories();
  }
  gettemporaryCategories(){
    this.tempcatservice.tempcategories().subscribe((res:any)=>{
      this.categories = res.data;
    });
  }

  nextpage(haveAttributes,haveSubCats,id){
    let categoryid = id;
    if(haveSubCats === 1){
        this.router.navigate(['/subcats'], { queryParams : { id: categoryid } });
    }
  }
  addSubcats(id){
    this.router.navigate(['/addCats/addsubCats'],{ queryParams : { id: id } });
  }
  removecat(id){
    let data = {
      "categoryId":id
    }
    this.tempcatservice.removeCategories(data).subscribe((res:any)=>{
      if(res.success == 1){
          this.gettemporaryCategories();
      }
    });;
  }

}
