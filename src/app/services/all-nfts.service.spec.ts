import { TestBed } from '@angular/core/testing';

import { AllNftsService } from './all-nfts.service';

describe('AllNftsService', () => {
  let service: AllNftsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllNftsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
