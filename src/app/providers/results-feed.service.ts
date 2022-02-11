import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Location {
  lat: string;
  long: string;
  locality: string;
  country: string;
}

export interface Circuit {
  circuitId: string;
  url: string;
  circuitName: string;
  Location: Location;
}

export interface Driver {
  driverId: string;
  permanentNumber: string;
  code: string;
  url: string;
  givenName: string;
  familyName: string;
  dateOfBirth: string;
  nationality: string;
}

export interface Constructor {
  constructorId: string;
  url: string;
  name: string;
  nationality: string;
}

export interface Time {
  millis: string;
  time: string;
}

export interface Time2 {
  time: string;
}

export interface AverageSpeed {
  units: string;
  speed: string;
}

export interface FastestLap {
  rank: string;
  lap: string;
  Time: Time2;
  AverageSpeed: AverageSpeed;
}

export interface Result {
  number: string;
  position: string;
  positionText: string;
  points: string;
  Driver: Driver;
  Constructor: Constructor;
  grid: string;
  laps: string;
  status: string;
  Time: Time;
  FastestLap: FastestLap;
}

export interface Race {
  season: string;
  round: string;
  url: string;
  raceName: string;
  Circuit: Circuit;
  date: string;
  time: string;
  Results: Result[];
}

export interface RaceTable {
  season: string;
  position: string;
  Races: Race[];
}

export interface MRData {
  xmlns: string;
  series: string;
  url: string;
  limit: string;
  offset: string;
  total: string;
  RaceTable: RaceTable;
}

export interface RootObject {
  MRData: MRData;
}

export interface DriverStanding {
  position: string;
  positionText: string;
  points: string;
  wins: string;
  Driver: Driver;
  Constructors: Constructor[];
}

export interface StandingsList {
  season: string;
  round: string;
  DriverStandings: DriverStanding[];
}

export interface StandingsTable {
  season: string;
  StandingsLists: StandingsList[];
}

export interface MRData {
  xmlns: string;
  series: string;
  url: string;
  limit: string;
  offset: string;
  total: string;
  StandingsTable: StandingsTable;
}

@Injectable({
  providedIn: 'root'
})
export class ResultsFeedService {

  constructor(private http: HttpClient) { }

  getResult(){
    return this.http.get<RootObject>('http://ergast.com/api/f1/2021/results/1.json')
      .toPromise();
  }
  getInfo(round: number){
    return this.http.get<RootObject>(`http://ergast.com/api/f1/2021/${round}/results.json`, {}).toPromise();
  }
  getStandings(){
    return this.http.get<RootObject>('http://ergast.com/api/f1/2021/driverStandings.json').toPromise();
  }
}

