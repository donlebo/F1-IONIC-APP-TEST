import { Component, OnInit } from '@angular/core';
import { Race, ResultsFeedService } from 'src/app/providers/results-feed.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
})
export class ResultsPage implements OnInit {

  results: Race[];

  constructor(private resultService: ResultsFeedService) { }

  async ngOnInit(){
    this.results = (await this.resultService.getResult()).MRData.RaceTable.Races;
    console.log(this.results)
   }
   doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
}
