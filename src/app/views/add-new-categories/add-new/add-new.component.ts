import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddNewServiceService} from './add-new-service.service';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarVerticalPosition, MatSnackBarHorizontalPosition	} from '@angular/material';


@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css']
})
export class AddNewComponent implements OnInit {
  categoryForm: FormGroup;
  submitted = false;
  horizontalPosition : MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor(private formBuilder: FormBuilder,
              private addnewservice : AddNewServiceService,
              public snackBar: MatSnackBar
            ) { 
    
  }

  ngOnInit() {
      this.categoryForm = this.formBuilder.group({
        category: ['', Validators.required],
        categoryName: ['', Validators.required],
        dropdown: ['', Validators.required],
        imageIcon: ['', [Validators.required]]
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.categoryForm.controls; }
  onSubmit() {
      this.submitted = true;
      // stop here if form is invalid
      if (this.categoryForm.invalid) {
          return;
      }
      let Attributes = 0;
      let Subcategories = 0;
      if(this.categoryForm.value.dropdown == 'have Attributes'){
          Attributes = 1;
      }else{
          Subcategories = 1
      }
      let jsondata = {
        "category": this.categoryForm.value.category,
        "categoryId": "-1",
        "categoryName": this.categoryForm.value.categoryName,
        "haveAttributes": Attributes,
        "haveSubCats": Subcategories,
        "imageIcon": this.categoryForm.value.imageIcon
      }
      this.addnewservice.generatenewCategories(jsondata).subscribe((res:any)=>{
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
