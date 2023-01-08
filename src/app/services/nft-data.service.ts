import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NftDataService {

  constructor(private http: HttpClient) { }

  getNftData(){
    const options = {
      method: 'GET',
      headers: {accept: 'application/json', 'X-API-KEY': 'iu87qb1bkTsbBD5bZdFqDYcCRTc8PxVe'}
    };
    fetch('https://api.blockspan.com/v1/exchanges/collections?chain=eth-main&exchange=opensea&page_size=25', options).then(response => response.json()).then(response => console.log(response))
    
  }


}
