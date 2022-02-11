import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RaceResultPage } from './race-result.page';

const routes: Routes = [
  {
    path: '',
    component: RaceResultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RaceResultPageRoutingModule {}
