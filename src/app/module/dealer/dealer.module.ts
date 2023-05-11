import { NgModule } from '@angular/core';
import { DealerRoutingModule } from './dealer-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
  ],
  imports: [
    DealerRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
})
export class DealerModule { }
