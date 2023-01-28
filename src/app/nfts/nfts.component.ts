import { Component, OnInit } from '@angular/core';
import { AllNftsService } from '../services/all-nfts.service';

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

        this.AllNftsFiltered = response.results.filter((item: any) => item.metadata != null);
      }
    })
  }

  public Imageurl(item: any) {
    if (item.cached_images != null) {
      return item.cached_images.original

    } else {
      return item.metadata.image
    }
  }

}
