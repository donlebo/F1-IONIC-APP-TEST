import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResultsFeedService, RootObject } from 'src/app/providers/results-feed.service';

@Component({
  selector: 'app-race-result',
  templateUrl: './race-result.page.html',
  styleUrls: ['./race-result.page.scss'],
})
export class RaceResultPage implements OnInit {

  currentRace: RootObject;
  results;
  
  constructor(private route: ActivatedRoute, private resultService: ResultsFeedService) { }

 async ngOnInit() {
  const round = this.route.snapshot.params.round;
  this.currentRace = (await this.resultService.getInfo(round));
  this.results = this.currentRace.MRData.RaceTable.Races[0];
  console.log(this.results);
  }
  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
}
