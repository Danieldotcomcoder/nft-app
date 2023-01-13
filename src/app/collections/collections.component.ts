import { Component, OnInit } from '@angular/core';
import { NftDataService } from '../services/nft-data.service';
import { Root } from '../models/collection.model';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent implements OnInit {

  constructor(private nftservice: NftDataService) { }

  CollectionData!: any;

  ngOnInit(): void {
    this.getCollectionsData()
  }


  private getCollectionsData() {
    this.nftservice.getCollectionsData().subscribe({
      next: (response: any) => {
        this.CollectionData = response.results
      
        
      }
    })
  }


}
