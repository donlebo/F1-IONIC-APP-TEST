import { Component, OnInit } from '@angular/core';
import { Race, ResultsFeedService } from 'src/app/providers/results-feed.service';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.page.html',
  styleUrls: ['./standings.page.scss'],
})
export class StandingsPage implements OnInit {

  standing = [];

  constructor(private resultService: ResultsFeedService) { }

  async ngOnInit(){
    this.standing = (await this.resultService.getStandings()).MRData.StandingsTable.StandingsLists[0].DriverStandings;
    console.log(this.standing)
  }
  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
}
