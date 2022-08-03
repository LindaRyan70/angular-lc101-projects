import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Favorite Photos';
  // I replaced the LaunchCode image b/c wouldn't display on my browser with Chrome. //
  // image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image1 = 'https://pbs.twimg.com/profile_images/1295809711393177606/zJcb95MI_400x400.jpg';
  image2 = 'https://www.niagarafallsstatepark.com/~/media/parks/niagara-falls/homepage/niagara-falls-mist-880x592.jpg?mw=768&hash=45F086CDE882F499DBD3704BA671CDBF8E4B7457';
  image3 = 'https://packedagain.com/wp-content/uploads/2021/02/feature_delicate-arch.jpg';

  constructor() { }

  ngOnInit() {
  }

}