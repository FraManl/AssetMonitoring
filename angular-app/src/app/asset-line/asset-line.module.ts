import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AssetLineComponent } from './asset-line.component';
import { AssetListComponent } from './asset-list/asset-list.component';
import { TransactionsComponent } from './transactions-line/transactions.component';
import { AssetLineRoutingModule } from './asset-line-routing.module';

@NgModule({
  declarations: [AssetLineComponent, AssetListComponent, TransactionsComponent],
  imports: [RouterModule, AssetLineRoutingModule],
})
export class AssetLineModule {}
