import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftsincollectionComponent } from './nftsincollection.component';

describe('NftsincollectionComponent', () => {
  let component: NftsincollectionComponent;
  let fixture: ComponentFixture<NftsincollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NftsincollectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NftsincollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
