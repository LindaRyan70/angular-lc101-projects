import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
 
  //  Added All Code Below for Chapter 31.6 Angular Part 3 Exercise.

  takeOffEnabled: boolean = true;


  handleTakeOff(rocketImage) {
    let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
    if (result) {
       this.color = 'blue';
       this.height = 10000;
       this.width = 0;
       this.message = 'Shuttle in flight.';

       // Added line below to reset takeOffEnabled.
       this.takeOffEnabled = false;

       // Added lines below to have rocket "take-off" initially.
       rocketImage.style.bottom = '10px';
       rocketImage.style.left = '0px';   
    }
  }
  handleLand(rocketImage) {
    let result = window.confirm('Are you sure you want the shuttle to land?');
    if (result) {
       this.color = 'green';
       this.height = 0;
       this.width = 0;
       this.message = 'Space shuttle has landed and is ready for takeoff!';

       // Added line below to reset takeOffEnabled.
       this.takeOffEnabled = true;
      
       // Added lines below to return rocket image to starting point.
       rocketImage.style.bottom = '0px';
       rocketImage.style.left = '0px';
    }
 }
  handleAbort(rocketImage) {
    let result = window.confirm('Are you sure you want to abort the shuttle mission?');
    if (result) {
       this.color = 'red';
       this.height = 0;
       this.width = 0;
       this.message = 'Mission Aborted!';

       // Added line below to reset takeOffEnabled.
       this.takeOffEnabled = true;

       // Added lines below to return rocket image to starting point.
       rocketImage.style.bottom = '0px';.
       rocketImage.style.left = '0px';
    }
 }
 
  moveRocket(rocketImage, direction) {
    if (direction === 'right' && this.width !== 470000) {
      let movement = parseInt(rocketImage.style.left) + 10 + 'px';
      rocketImage.style.left = movement;
      this.width = this.width + 10000;
    } else if (direction === 'left' && this.width !== -20000) {
      let movement = parseInt(rocketImage.style.left) - 10 + 'px';
      rocketImage.style.left = movement;
      this.width = this.width - 10000;
    } else if (direction === 'up' && this.height !== 330000) {
      let movement = parseInt(rocketImage.style.bottom) + 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height = this.height + 10000;
    } else if (direction === 'down' && this.height !== 0) {
      let movement = parseInt(rocketImage.style.bottom) - 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height = this.height - 10000;
    }
    this.borderCheck(this.width, this.height);
  }

  // The function below along with the function call right above this, triggers an alert background color if too close to edges.
  borderCheck(height, width) {
    if (height > 310000 || height < 10000 || width < 0 || width > 450000) {
      this.color = "orange";
    } else {
      this.color = "blue";
    }
  }


}
