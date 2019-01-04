import { Component, OnInit } from '@angular/core';
import { HomeServiceService } from './home-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public categories : any;
  constructor( public homeservice : HomeServiceService,
               public router : Router 
    ) { }
  ngOnInit() {
    this.allcategories();
  }

  allcategories(){
    this.homeservice.getallCategorieslist().subscribe((res:any)=>{
        if(res.success === 1 ){
            this.categories = res.data.slice();      
        }
    });
  }
  nextpage(haveAttributes,haveSubCats,id){
    console.log('query params', id);
    let catehoryid = id;
    if(haveSubCats === 1){
        this.router.navigate(['/subcats'], { queryParams : { id: catehoryid } });
    }
  }
}
