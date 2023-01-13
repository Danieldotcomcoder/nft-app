import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CollectionsComponent } from './collections/collections.component';
import { NftsComponent } from './nfts/nfts.component';
import { NftItemComponent } from './nft-item/nft-item.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'collections-component', component: CollectionsComponent },
  { path: 'nfts-component', component: NftsComponent },
  { path: 'nftItem/:address/:id', component: NftItemComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
