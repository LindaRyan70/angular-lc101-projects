import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinks = ['https://www.cocastl.org/', 'https://stagesstlouis.org/a-chorus-line/', 'https://www.youtube.com/watch?v=t69CQXa_nXk'];
  
  constructor() { }

  ngOnInit() {
  }

}
