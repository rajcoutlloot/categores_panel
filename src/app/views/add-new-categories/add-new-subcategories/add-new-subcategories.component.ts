import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute , Router} from '@angular/router';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarVerticalPosition, MatSnackBarHorizontalPosition	} from '@angular/material';
import { AddNewSubcategoriesServiceService } from './add-new-subcategories-service.service'

@Component({
  selector: 'app-add-new-subcategories',
  templateUrl: './add-new-subcategories.component.html',
  styleUrls: ['./add-new-subcategories.component.css']
})
export class AddNewSubcategoriesComponent implements OnInit {
  categoryId :any;
  subcategoryform :FormGroup;  
  submitted = false; 
  horizontalPosition : MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor( private formBuilder: FormBuilder,
                private route : ActivatedRoute,
                private addsubcatsservice : AddNewSubcategoriesServiceService,
                public snackBar: MatSnackBar
              ) { 
                this.route.queryParams.subscribe(params => {
                  this.categoryId = params.id
                });
              }

  ngOnInit() {
      this.subcategoryform = this.formBuilder.group({
        subcategory: ['', Validators.required],
        subcategoryName: ['', Validators.required],
        dropdown: ['', Validators.required],
        imageIcon: ['', [Validators.required]]
      });
      console.log('this is categoryid', this.categoryId);
  }
  // convenience getter for easy access to form fields
  get f() { return this.subcategoryform.controls; }
  onSubmit() {
      this.submitted = true;
      // stop here if form is invalid
      if (this.subcategoryform.invalid) {
          return;
      }
      let Attributes = 0;
      let Subcategories = 0;
      if(this.subcategoryform.value.dropdown == 'have Attributes'){
          Attributes = 1;
      }else{
          Subcategories = 1
      }

      let jsondata = {
        "categoryId":this.categoryId,
        "subCategory": {
          "category": this.subcategoryform.value.subcategory,
          "categoryId": "-1",
          "categoryName": this.subcategoryform.value.subcategoryName,
          "haveAttributes": Attributes,
          "haveSubCats": Subcategories,
          "imageIcon": this.subcategoryform.value.imageIcon
        }
      }
      console.log('this is the json data', jsondata);
      this.addsubcatsservice.addSubCategories(jsondata).subscribe((res:any)=>{
        console.log('this is the response', res);
        if(res.success === 1){
          let config = new MatSnackBarConfig();
          config.duration = 2000;
          config.verticalPosition = this.verticalPosition;
          config.horizontalPosition = this.horizontalPosition;
          this.snackBar.open("Added sucessfully","",config);
        }
      });
  }
}
