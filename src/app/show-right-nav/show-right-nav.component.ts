import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-right-nav',
  templateUrl: './show-right-nav.component.html',
  styleUrls: ['./show-right-nav.component.css']
})
export class ShowRightNavComponent implements OnInit {

  events: string[] = [];
  opened: boolean;
  
  constructor() { }

  ngOnInit() {
  }

}
