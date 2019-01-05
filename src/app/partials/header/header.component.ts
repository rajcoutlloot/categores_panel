import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  shownavigtionmenu : boolean = false;
  ngOnInit() {
  }
  viewlist(){
    if(this.shownavigtionmenu === false){
      this.shownavigtionmenu = true;
    }else{
      this.shownavigtionmenu =  false;
    }
  }
}
