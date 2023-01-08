import { Component, OnInit } from '@angular/core';
import { NftDataService } from './services/nft-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  constructor(private nftservice: NftDataService){}
  ngOnInit(): void {
      this.getNftData()
  }


  private getNftData() {
    this.nftservice.getNftData()
  }
}
