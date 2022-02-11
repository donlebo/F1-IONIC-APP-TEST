import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RaceResultPageRoutingModule } from './race-result-routing.module';

import { RaceResultPage } from './race-result.page';
import { ExploreContainerComponentModule } from 'src/app/explore-container/explore-container.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RaceResultPageRoutingModule,
    ExploreContainerComponentModule
  ],
  declarations: [RaceResultPage]
})
export class RaceResultPageModule {}
