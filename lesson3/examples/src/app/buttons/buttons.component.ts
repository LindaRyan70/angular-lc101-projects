import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'buttons',
   templateUrl: './buttons.component.html',
   styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
   buttonHeading: string[] = ['Buttons', 'Joke Buttons'];
   inactiveGold: boolean = false;
   inactiveSilver: boolean = false;
   inactiveCopper: boolean = false;

   // Trying to to Chptr 31.4.3 Try It with variable below
   changeColor: boolean = false;

   
   constructor() { }

   ngOnInit() { }

   buttonReset() {
      let inactive = ((this.inactiveGold) && (this.inactiveSilver) && (this.inactiveCopper)); 
      if ((this.inactiveGold = false) || (this.inactiveSilver = false) || (this.inactiveCopper = false)) {
         return inactive;
      }
   }

}
