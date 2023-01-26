import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetLineComponent } from './asset-line.component';
import { TransactionsComponent } from './transactions-line/transactions.component';

const routes: Routes = [
  {
    path: '',
    component: AssetLineComponent,
    // canActivate: [AuthGuard],
    children: [{ path: '', component: TransactionsComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssetLineRoutingModule {}
