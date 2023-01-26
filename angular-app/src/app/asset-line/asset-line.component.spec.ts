import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetLineComponent } from './asset-line.component';

describe('AssetLineComponent', () => {
  let component: AssetLineComponent;
  let fixture: ComponentFixture<AssetLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetLineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssetLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
