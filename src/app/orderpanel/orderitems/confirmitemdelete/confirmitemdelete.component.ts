import { Component, OnInit, Inject } from '@angular/core';
import { OrderService } from 'src/app/shared/orderservice.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-confirmitemdelete',
  templateUrl: './confirmitemdelete.component.html',
  styleUrls: ['./confirmitemdelete.component.css']
})
export class ConfirmitemdeleteComponent implements OnInit {
  isKitchenOrders: boolean;
  constructor(public service: OrderService,
    public toastr: ToastrService,
    @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
    console.log(this.data);
    this.isKitchenOrders = false;
    if (this.data == 'kitchenOrders') {
      this.isKitchenOrders = true;
    }
  }
  deleteItem() {
    if (!this.isKitchenOrders) {
      this.service.orderItems.splice(this.service.deleteItemId, 1);
      this.toastr.error('Deleted Successfully', 'Item Removed From Cart');
    }
    if (this.isKitchenOrders) {
      this.service.kitchenOrders.splice(this.service.deleteItemId, 1);
      this.toastr.error('Deleted Successfully', 'Item Removed From Cart');
    }
  }
}
