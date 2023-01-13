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
    return this.http.get<Root>('https://api.blockspan.com/v1/exchanges/collections?chain=arbitrum-main&exchange=opensea&page_size=50', options);

  }

  getSingleNftInfo(address: string, token_id: number) {
    const options = {
      method: 'GET',
      headers: {accept: 'application/json', 'X-API-KEY': 'iu87qb1bkTsbBD5bZdFqDYcCRTc8PxVe'}
    };

    return this.http.get('https://api.blockspan.com/v1/nfts/contract/' +address+ '/token/' +token_id+ '?chain=arbitrum-main', options)
    
  }


  getAllNftsOfCollection(address: string) {
    const options = {
      method: 'GET',
      headers: {accept: 'application/json', 'X-API-KEY': 'iu87qb1bkTsbBD5bZdFqDYcCRTc8PxVe'}
    };
    
    return this.http.get('https://api.blockspan.com/v1/nfts/contract/' +address +'?chain=arbitrum-main&page_size=25', options)

  }
}
