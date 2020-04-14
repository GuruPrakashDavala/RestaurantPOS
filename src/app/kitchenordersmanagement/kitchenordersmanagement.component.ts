import { Component, OnInit, ViewChild } from '@angular/core';
import { OrderService } from '../shared/orderservice.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { OrderitemsComponent } from '../orderpanel/orderitems/orderitems.component';
import { OrderlistitemsComponent } from '../orderpanel/orderlistitems/orderlistitems.component';
import { NgForm } from '@angular/forms';
import { ConfirmitemdeleteComponent } from '../orderpanel/orderitems/confirmitemdelete/confirmitemdelete.component';

@Component({
  selector: 'app-kitchenordersmanagement',
  templateUrl: './kitchenordersmanagement.component.html',
  styleUrls: ['./kitchenordersmanagement.component.css']
})
export class KitchenordersmanagementComponent implements OnInit {
  orderItems = [];
  CustomerNameTxt: string;
  CustomerNumberTxt: string;
  tablenumberTxt: string;
  orderDetails = {};
  OrderNoTxt: string;
  @ViewChild('form') mytemplateForm: NgForm;
  constructor(private service: OrderService,
    private dialog: MatDialog,
    public toastr: ToastrService) { }

  ngOnInit() {
    this.tablenumberTxt = "";
    this.OrderNoTxt = Math.floor(100000 + Math.random() * 900000).toString();
    this.service.isLogin = true;
    this.service.kitchenOrdersGrandTotal = null;
    this.service.kitchenOrders = [];
    this.orderItems = this.service.kitchenOrders;
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
      dialogConfig.data = "kitchenOrders";
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
      dialogConfig.data = "kitchenOrders";
      //dialogConfig.data = { OrderItemIndex, OrderId };
      //this.dialog.open(OrderitemsComponent, dialogConfig);
      this.dialog.open(OrderlistitemsComponent, dialogConfig);
    }
  }
  onSubmit(formValues: NgForm) {
    this.orderDetails = {
      OrderNo: this.OrderNoTxt,
      CustomerName: this.CustomerNameTxt,
      CustomerNumber: this.CustomerNumberTxt,
      TableNumber:this.tablenumberTxt,
      GrandTotal: this.service.kitchenOrdersGrandTotal,
      orderHistory: this.orderItems,
      Date: new Date(),
    };
    console.log(this.orderDetails);
    this.service.allKitchenOrders.push(this.orderDetails);
    this.toastr.success('Order Sent Successfully');
    //this.mytemplateForm.reset();
    this.mytemplateForm.reset();
    this.ngOnInit();
  }
  DeleteItem(index) {
    this.service.deleteItemId = null;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = 'kitchenOrders';
    dialogConfig.disableClose = true;
    this.service.deleteItemId = index;
    //dialogConfig.width = "40%";
    this.dialog.open(ConfirmitemdeleteComponent, dialogConfig);
  }
}
