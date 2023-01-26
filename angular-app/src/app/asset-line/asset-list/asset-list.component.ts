import { Component, OnInit } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { AssetLine } from '../asset-line.model';

@Component({
  selector: 'app-asset-list',
  templateUrl: './asset-list.component.html',
  styleUrls: ['./asset-list.component.css'],
})
export class AssetListComponent implements OnInit {
  assetlines: AssetLine[];
  testArr: Array<void>;
  displayMode = false;

  constructor() {}

  ngOnInit() {
    testArr = ['AA', 'BB', 5654, 456, 45654, 345, 67];
    this.assetlines = testArr;

    // public code: string;
    // public isIn: string;
    // public volume: number;
    // public unitPrice: number;
    // public totalFees: number;
    // public valorisationT0: number;
    // public valorisationToDate: number;
  }

  onDisplay() {
    console.log('Display list of transactions');
    this.displayMode = true;
    console.log(this.displayMode);
  }
}
