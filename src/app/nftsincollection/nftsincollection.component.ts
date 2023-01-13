import { Component, OnInit } from '@angular/core';
import { NftDataService } from '../services/nft-data.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-nftsincollection',
  templateUrl: './nftsincollection.component.html',
  styleUrls: ['./nftsincollection.component.css']
})
export class NftsincollectionComponent implements OnInit {
  address?: string

  constructor(private nftdataservice: NftDataService, private _Activatedroute: ActivatedRoute) {
    this.address = this._Activatedroute.snapshot.params['address']
   }
   Nftsincollection?: any
  ngOnInit(): void {
    this.getSingleNftData(this.address)
  }


  private getSingleNftData(address: any) {
    this.nftdataservice.getAllNftsOfCollection(address).subscribe({
      next: (response: any) => {
        this.Nftsincollection = response.results
        console.log(this.Nftsincollection);
      }
    })
  }
}
