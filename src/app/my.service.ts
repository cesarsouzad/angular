import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MyService {

  private apiurl = 'https://www.mocky.io/v2/5d531c4f2e0000620081ddce';

  constructor(private http: HttpClient) { }
  destino = 'https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989'
  showTodayDate(){
    return new Date() ;
  }

  getData(){
    return this.http.get(this.apiurl)
  }
  informacao(pegainfo){
    return this.http.post(this.destino, pegainfo).subscribe(data =>{
      console.log(data);
  })
  
  }
}
 