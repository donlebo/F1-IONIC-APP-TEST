import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  
  constructor(private storage: Storage, private router: Router) {}

  async ngOnInit(){
   /*  const store = new Storage();
    await this.storage.create();
    const sliderShow: true | null = await this.storage.get('slider');
    const path = sliderShow ? '/signin' : '/slider';
    await this.router.navigate([path]);*/

    await this.storage.create();
    await this.router.navigate([await this.storage.get('slider') ? '/login' : '/slider']); 
  }
}