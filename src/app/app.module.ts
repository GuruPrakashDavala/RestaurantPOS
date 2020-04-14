import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
//import { OrdersComponent } from './orders/';
import { OrderpanelComponent } from './orderpanel/orderpanel.component';
import { OrderitemsComponent } from './orderpanel/orderitems/orderitems.component';
import { OrderService } from './shared/orderservice.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
//import { ReportsComponent } from './reports/reports.component';
import { MaterialModule } from './material/material/material.module';
import { AllordersComponent } from './allorders/allorders.component';
import { ConfirmitemdeleteComponent } from './orderpanel/orderitems/confirmitemdelete/confirmitemdelete.component';
import { VieworderComponent } from './allorders/vieworder/vieworder.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { OrderlistitemsComponent } from './orderpanel/orderlistitems/orderlistitems.component';
import { ReportsComponent } from './reports/reports.component';
import { KitchenordersmanagementComponent } from './kitchenordersmanagement/kitchenordersmanagement.component';
import { OpenkitchenordersComponent } from '../app/kitchenordersmanagement/openkitchenorders/openkitchenorders.component';
//import { ReportsComponent } from './reports/reports.component';
@NgModule({
  declarations: [
    AppComponent,
    OrderpanelComponent,
    OrderitemsComponent,
    AllordersComponent,
    ConfirmitemdeleteComponent,
    VieworderComponent,
    LoginpageComponent,
    OrderlistitemsComponent,
    ReportsComponent,
    KitchenordersmanagementComponent,
    OpenkitchenordersComponent,
    //ReportsComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule,
    MaterialModule,
    ToastrModule.forRoot({
      maxOpened:1,
      autoDismiss:true
    }),
    ReactiveFormsModule
  ],
  //entryComponents:[OrderItemsComponent],
  providers: [OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
