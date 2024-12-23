import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApicallService {

  baseurl: string;
  constructor(private httpClient: HttpClient) {
    this.baseurl = 'https://localhost:44369/';
  }

  GetApi(val: string,queryParams?:any) {
    if(queryParams==null ||queryParams==undefined)
    return this.httpClient.get(`${this.baseurl}` + val);
    else
    return this.httpClient.get(`${this.baseurl}` + val,
    {params: queryParams});
   
 
  }
}
