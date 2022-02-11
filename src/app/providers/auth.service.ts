import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { environment } from 'src/environments/environment';

export type Login = {
  surname: string;
  email: string;
};

export type Signin = Login & {
  name: string;
  surname: string;
  os: string;
};

export type Token = {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
  tokenType: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('authorization', 'Basic d2ViLXN0YWdlLmVhdHNyZWFkeS5jb206WTVTMEpWdDV4WGFCdDhZaA==');

  constructor(private http: HttpClient, private storage: Storage) { }

  signin(obj: Signin){
    return this.http.post(`${environment.host}/v2/auth/signup`, obj, {headers: this.headers}).toPromise();
  }

  login(obj: Login): Promise<Token>{
   return this.http.post(`${environment.host}/v2/auth/login`, obj, {headers: this.headers}).toPromise() as Promise<Token>;
  } 
  
   /* profileMe(){
     try {
      const headers= new HttpHeaders ({
        'content-type': 'application/json',
        'authorization': 'Bearer ' + this.storage.get('accessToken')
       })
       return this.http.get(`${environment.host}/v2/auth/me`, {headers}).toPromise() as Promise<Token>; 
     } catch (error) {
       console.log(error);
     }
  }  */
}