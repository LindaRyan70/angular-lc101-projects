import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'skill-set',
   templateUrl: './skill-set.component.html',
   styleUrls: ['./skill-set.component.css']
})
export class SkillSetComponent implements OnInit {
   listHeading: string = 'Some Coding Skills I Know';
   skills: string[] = ['Loops', 'Conditionals', 'Functions', 'Classes', 'Modules', 'Git', 'HTML/CSS'];
   alternateColor: string = "black";
   bulletType: string = 'A';
   changeColor: boolean = true;
   
   // Used below line to try the various answers for Chtpr 31.3 Check Your Understanding.
   // toReverse: string = "";

   constructor() { }

   ngOnInit() { }

}
