import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.css']
})
export class PageTitleComponent implements OnInit {
  title = "Linda's Angular Lesson 1 Exercises";
  gif1 = 'https://media2.giphy.com/media/L1R1tvI9svkIWwpVYr/giphy.gif?cid=ecf05e47k7km57mjenfl8tob6ir77615c1eqd1w8u11043rv&rid=giphy.gif&ct=g';


  constructor() { }

  ngOnInit() {
  }

}
