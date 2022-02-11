import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.page.html',
  styleUrls: ['./slider.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SliderPage {

  onInitIsClosed = false;

  constructor(private storage: Storage, private router: Router) { }


  sliderShow(){
    this.storage.set('slider', true);
    this.router.navigate(['/login'])
  }
}
