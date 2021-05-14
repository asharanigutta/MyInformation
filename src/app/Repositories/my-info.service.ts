import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyInfoService {

  SERVER_URL: string = "http://localhost:8080/api/";
  constructor(private httpClient: HttpClient) { }

  public getMyInfoList(){ 
       return this.httpClient.get(this.SERVER_URL + 'hobbies');
  }
}
