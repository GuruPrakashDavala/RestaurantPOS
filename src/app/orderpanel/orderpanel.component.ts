import { Component, OnInit, ViewChild } from '@angular/core';
import { OrderService } from '../shared/orderservice.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { OrderitemsComponent } from '../orderpanel/orderitems/orderitems.component';
import { ToastrService } from 'ngx-toastr';
import { ConfirmitemdeleteComponent } from './orderitems/confirmitemdelete/confirmitemdelete.component';
import { OrderlistitemsComponent } from './orderlistitems/orderlistitems.component';
import { NgForm } from '@angular/forms';
import { OpenkitchenordersComponent } from '../kitchenordersmanagement/openkitchenorders/openkitchenorders.component';
@Component({
  selector: 'app-orderpanel',
  templateUrl: './orderpanel.component.html',
  styleUrls: ['./orderpanel.component.css']
})
export class OrderpanelComponent implements OnInit {
  //form: FormGroup;
  orderItems = [];
  OrderNoTxt: string;
  PaymentMethodTxt: string;
  TotalCashTxt: number;
  RemainingCashTxt: number;
  CustomerNameTxt: string;
  CustomerNumberTxt: string;
  PaymentCardTxt: string;
  orderDetails = {};
  filterOrderNumbers = [];
  // isEditItem: boolean;
  //GrandTotalTxt:string;
  @ViewChild('form') mytemplateForm: NgForm;
  constructor(public service: OrderService,
    private dialog: MatDialog,
    public toastr: ToastrService
  ) { }

  ngOnInit() {
    this.service.isLogin = true;
    this.service.grandTotal = null;
    this.service.orderItems = [];
    this.PaymentMethodTxt = "";
    this.OrderNoTxt = Math.floor(100000 + Math.random() * 900000).toString();
    this.service.OrderNoTxt = this.OrderNoTxt;
    this.orderItems = this.service.orderItems;
    console.log(this.orderItems.length);
    this.checkIfExists();
    //this.GrandTotalTxt = this.service.grandTotal;
    // if (this.service.orderItems.length > 0) {

    // }
    //this.resetForm();
  }
  AddOrEditOrderItem(item) {
    //console.log(item);
    this.service.populateValues = {};
    this.service.isEditItem = false;
    if (item) {
      console.log(item);
      this.service.isEditItem = true;
      this.service.populateValues = item;
      const dialogConfig = new MatDialogConfig();
      dialogConfig.autoFocus = true;
      dialogConfig.disableClose = true;
      dialogConfig.width = "60%";
      //dialogConfig.height="90%";
      //dialogConfig.data = "storeData";
      //dialogConfig.data = { OrderItemIndex, OrderId };
      //this.dialog.open(OrderitemsComponent, dialogConfig);
      this.dialog.open(OrderitemsComponent, dialogConfig);
    }
    else {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.autoFocus = true;
      dialogConfig.disableClose = true;
      dialogConfig.width = "60%";
      //dialogConfig.height="90%";
      dialogConfig.data = "storeData";
      //dialogConfig.data = { OrderItemIndex, OrderId };
      //this.dialog.open(OrderitemsComponent, dialogConfig);
      this.dialog.open(OrderlistitemsComponent, dialogConfig);
    }
  }
  DeleteItem(index) {
    this.service.deleteItemId = null;
    const dialogConfig = new MatDialogConfig();
    //dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    this.service.deleteItemId = index;
    //dialogConfig.width = "40%";
    this.dialog.open(ConfirmitemdeleteComponent, dialogConfig);
  }
  calculateRemaining() {
    this.RemainingCashTxt = this.TotalCashTxt - this.service.grandTotal;
  }
  checkIfExists() {
    this.filterOrderNumbers = [];
    this.filterOrderNumbers = this.service.allKitchenOrders.filter((elem) => !this.service.allOrders.find(({ OrderNo }) => elem.OrderNo === OrderNo));
    // console.log(this.service.allKitchenOrders);
    // console.log(this.service.allOrders);
    if (this.filterOrderNumbers.length > 0) {
      return true;
    }
    else {
      return false;
    }
  };
  openKitchenOrders(){
    //console.log(item);
    //this.service.isEditItem = true;
    //this.service.populateValues = item;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.disableClose = true;
    dialogConfig.data = this.filterOrderNumbers;
    dialogConfig.width = "60%";
    this.dialog.open(OpenkitchenordersComponent, dialogConfig);
  }
  onSubmit(formValues: NgForm) {
    this.orderDetails = {
      OrderNo: this.service.OrderNoTxt,
      CustomerName: this.service.CustomerNameTxt,
      CustomerNumber: this.service.CustomerNumberTxt,
      GrandTotal: this.service.grandTotal,
      PaymentMethod: this.PaymentMethodTxt,
      TotalCash: this.TotalCashTxt,
      RemainingCash: this.RemainingCashTxt,
      CardNumber: this.PaymentCardTxt,
      orderHistory: this.service.orderItems,
      Date: new Date(),
    };
    //var stringified = JSON.stringify(this.orderDetails);
    console.log(this.orderDetails);
    this.service.allOrders.push(this.orderDetails);
    this.toastr.success('Order Number - ' + this.OrderNoTxt, 'Order Placed Successfully');
    this.mytemplateForm.reset();
    this.ngOnInit();
    //formValues.resetForm();
    // this.CustomerNameTxt = null;
    // this.CustomerNumberTxt = null;
    // this.TotalCashTxt = null;
    // this.RemainingCashTxt = null;
    //console.log(formValues);
  }
}

