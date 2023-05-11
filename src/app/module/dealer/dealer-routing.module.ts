import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DealerComponent } from './dealer.component';


const routes: Routes = [
  {
      path: '',
      component: DealerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class DealerRoutingModule { }
