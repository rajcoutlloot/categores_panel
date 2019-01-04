import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { AttributesServiceService } from './attributes-service.service'
@Component({
  selector: 'app-attributes',
  templateUrl: './attributes.component.html',
  styleUrls: ['./attributes.component.css']
})
export class AttributesComponent implements OnInit {

  categoryId : any;
  attributes : any;
  constructor(
            private router : Router,
            private route : ActivatedRoute,
            private attributeservice : AttributesServiceService      
  ) { }

  ngOnInit() {
    this.route.queryParams
    .subscribe(params => {
      this.categoryId = params.id;
    });
    this.subcategorieslist();
  }

  subcategorieslist(){
    this.attributeservice.getattributeslist(this.categoryId).subscribe((res:any)=>{
      // console.log('this is the atrributes......', res.data);
      if(res.success === 1){
        this.attributes = res.data;
      }
    });
  }

}
