import { Component, OnInit } from '@angular/core';
import { HomeServiceService } from './home-service.service';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarVerticalPosition, MatSnackBarHorizontalPosition	} from '@angular/material';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public categories : any;

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor( public homeservice : HomeServiceService,
               public router : Router ,
               public snackBar: MatSnackBar
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
    let categoryid = id;
    if(haveSubCats === 1){
        this.router.navigate(['/subcats'], { queryParams : { id: categoryid } });
    }
  }
  copyCategories(id){
    this.homeservice.addtotempCategories(id).subscribe((res:any)=>{
        if(res.success === 1){
          let config = new MatSnackBarConfig();
          config.duration = 2000;
          config.verticalPosition = this.verticalPosition;
          config.horizontalPosition = this.horizontalPosition;
          this.snackBar.open("copied !","",config);
        }
    });
  }
}
