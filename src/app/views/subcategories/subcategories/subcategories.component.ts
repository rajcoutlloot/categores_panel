import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { SubcategoriesServiceService } from './subcategories-service.service'

@Component({
  selector: 'app-subcategories',
  templateUrl: './subcategories.component.html',
  styleUrls: ['./subcategories.component.css']
})
export class SubcategoriesComponent implements OnInit {

  constructor(
    private route : ActivatedRoute,
    private subcatservice : SubcategoriesServiceService,
    private router : Router
    ) {
      this.route.queryParams
      .subscribe(params => {
        this.categoryId = params.id;
        this.subcategorieslist();
      });
    }
  categoryId : any;
  subcategories : any;
  ngOnInit() {
  }
  
  subcategorieslist(){
    this.subcatservice.getsubcategorieslist(this.categoryId).subscribe((res:any)=>{
      if(res.success === 1){
        this.subcategories = res.data;
      }
    });
  }

  nextpage(haveAttributes,haveSubCats,id){
    let catehoryid = id;
    if(haveSubCats === 1){
        this.router.navigate(['/subcats'], { queryParams : { id: catehoryid } });
    }
    if(haveAttributes === 1){
        this.router.navigate(['/subcats/attributes'], { queryParams : { id: catehoryid } });
    }
  }
}
