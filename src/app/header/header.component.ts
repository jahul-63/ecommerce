import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isActive:boolean=false;
  constructor() { }

  ngOnInit(): void {
    
  }
  mega_text() {
    if (this.isActive == false) {
      this.isActive = true;
    } else if (this.isActive == true) {
      this.isActive = false;
    }
  }

}
