import { Component, OnInit } from '@angular/core';
import { NftDataService } from '../services/nft-data.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-nft-item',
  templateUrl: './nft-item.component.html',
  styleUrls: ['./nft-item.component.css']
})
export class NftItemComponent implements OnInit {
  address?: string
  token_id?: number
  constructor(private nftdataservice: NftDataService, private _Activatedroute: ActivatedRoute) {
    this.address = this._Activatedroute.snapshot.params['address']
    this.token_id = this._Activatedroute.snapshot.params['id']
   }
  NftInfo?: any
  ngOnInit(): void {
    this.getSingleNftData(this.address,this.token_id)
  }
  
 
  private getSingleNftData(address: any, token_id: any) {
    this.nftdataservice.getSingleNftInfo(address,token_id).subscribe({
      next: (response: any) => {
        this.NftInfo = response
        console.log(this.NftInfo);
      }
    })
  }
  
}
