import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AllNftsService } from '../services/all-nfts.service';
import { Root } from '../models/collection.model';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-nfts',
  templateUrl: './nfts.component.html',
  styleUrls: ['./nfts.component.css']
})
export class NftsComponent implements OnInit {

  constructor(private allnftsservice: AllNftsService) { }

  AllNfts!: any
  AllNftsFiltered!: any

  ngOnInit(): void {
    this.getAllNftsData()

  }

  private getAllNftsData() {
    this.allnftsservice.getallnfts().subscribe({
      next: (response: any) => {
        this.AllNfts = response.results
        this.AllNftsFiltered = this.AllNfts.filter((item: any) => item.metadata != null);
      }
    })
  }

  public fiximageurl(url: string) {
    if(url) {
    return url.replace("ipfs://", "https://ipfs.io/ipfs/")
    } else {
      return 1
    }
  }

}
