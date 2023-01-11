import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Root } from '../models/collection.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NftDataService {

  constructor(private http: HttpClient) { }

  getCollectionsData(): Observable<Root>{
    const options = {
      method: 'GET',
      headers: { accept: 'application/json', 'X-API-KEY': 'iu87qb1bkTsbBD5bZdFqDYcCRTc8PxVe' }
    };
    return this.http.get<Root>('https://api.blockspan.com/v1/exchanges/collections?chain=eth-main&exchange=opensea&page_size=50', options);
    
  }
}
