import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies = ['The Manchurian Candidate', 'Oceans 8', 'Hidden Figures', 'The Incredibles', 'The Princess Bride'];
  
  // Example below can be used to trigger the *ngIf else block in html file. //
  // movies = ['Hidden Figures', 'The Incredibles', 'The Princess Bride'];

  constructor() { }

  ngOnInit() {
  }

}