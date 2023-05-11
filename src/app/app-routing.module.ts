import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DealerComponent } from './module/dealer/dealer.component';
import { VehicleComponent } from './module/vehicle/vehicle.component';

const routes: Routes = [
  { path: '', redirectTo: '/dealers', pathMatch: 'full' },
  { path: 'dealers', component: DealerComponent },
  { path: 'vehicles/:bac', component: VehicleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
