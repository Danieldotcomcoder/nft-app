import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Root } from '../models/nfts.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllNftsService {

  constructor(private http: HttpClient) { }

  getallnfts(): Observable<Root> {
    const options = {
      method: 'GET',
      headers: {accept: 'application/json', 'X-API-KEY': 'iu87qb1bkTsbBD5bZdFqDYcCRTc8PxVe'}
    };
    
    return this.http.get<Root>('https://api.blockspan.com/v1/nfts?chain=eth-main&page_size=100', options)
  
  }
}
