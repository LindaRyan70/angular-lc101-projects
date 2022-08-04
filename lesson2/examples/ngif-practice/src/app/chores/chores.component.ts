import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   // Chptr 30.3.2 Try It 1/2 DOES display "Work harder!" html element:
   // chores = ['Empty dishwasher', 'Complete LaunchCode prep work', 'Buy groceries'];
   // finishedChores = [];

   // Chptr 30.3.2 Try It 1/2 does NOT display "Work harder!" html element:
   // chores = ['Empty dishwasher', 'Complete LaunchCode prep work', 'Buy groceries'];
   // finishedChores = ['Clean the bathrooms', 'Vacuum', 'Dust', 'Organize your sock drawer'];
   
   // Chptr 30.3.2 Try It 3/4 display image:
   // chores = ['Empty dishwasher'];
   // finishedChores = ['Clean the bathrooms', 'Vacuum', 'Dust', 'Organize your sock drawer'];
   
   // Chptr 30.3.2 Try It 3/4 displays "No allowance yet.":
   // chores = ['Empty dishwasher', 'Complete LaunchCode prep work', 'Buy groceries'];
   // finishedChores = ['Clean the bathrooms', 'Vacuum', 'Dust', 'Organize your sock drawer'];

   // Chptr 30.3.2 Try It 5 display h1 "Ice cream treat!":
   chores = ['Empty dishwasher'];
   finishedChores = ['Clean the bathrooms', 'Vacuum', 'Dust', 'Organize your sock drawer'];

   // Chptr 30.3.2 Try It 5 display h3/p on how to earn ice cream:
   // chores = [];
   // finishedChores = ['Clean the bathrooms', 'Vacuum', 'Dust', 'Organize your sock drawer'];

   targetImage = 'https://pbs.twimg.com/profile_images/1295809711393177606/zJcb95MI_400x400.jpg';

   constructor() { }

   ngOnInit() {
   }

}
