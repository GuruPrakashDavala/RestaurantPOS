import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderitemsComponent } from './orderpanel/orderitems/orderitems.component';
import { OrderpanelComponent } from './orderpanel/orderpanel.component';
import { AllordersComponent } from './allorders/allorders.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { ReportsComponent } from './reports/reports.component';
import { KitchenordersmanagementComponent } from './kitchenordersmanagement/kitchenordersmanagement.component';
const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'reports',component:ReportsComponent},
  {path:'orders', component: OrderitemsComponent},
  {path:'allorders', component: AllordersComponent},
  {path:'loginpage',component:LoginpageComponent},
  {path:'orderpanel',component:OrderpanelComponent},
  {path:'kitchenorder',component:KitchenordersmanagementComponent},
  {path:'login', children:[
  {path:'',component: LoginpageComponent}
  //{path:'edit/:id', component: OrderComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
