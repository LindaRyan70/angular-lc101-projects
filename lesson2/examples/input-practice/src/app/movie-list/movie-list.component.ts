import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
   movies = ['Toy Story', 'The Shining', 'Sleepless in Seattle', 'The Martian'];

   constructor() { }

   ngOnInit() {
   }

   // addMovie(newTitle: string) {
   //    if(!this.movies.includes(newTitle) && newTitle !== ''){
   //       this.movies.push(newTitle);
   //    }
   // }

// Lines below replace addMovie() code above to solve Bonus Mission.
// The errorMessage variable can me any word b/c only applies in this function and returns as empty string to the html message variable in imput/button/p if no error.
// I added .trim() tp the validation to prevent white space entries.  
addMovie (newTitle: string) {
      let errorMessage = '';
      if(newTitle.trim() === ''){
         errorMessage = 'Please enter a movie title.';
      } else if (this.movies.includes(newTitle)) {
         errorMessage = `${newTitle} is already on the list. Please enter a different movie title.`;
      } else {
         this.movies.push(newTitle);
      }
      return errorMessage;
   }


}