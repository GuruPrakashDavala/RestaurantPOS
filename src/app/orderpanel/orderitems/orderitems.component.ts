import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { OrderService } from 'src/app/shared/orderservice.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-orderitems',
  templateUrl: './orderitems.component.html',
  styleUrls: ['./orderitems.component.css']
})
export class OrderitemsComponent implements OnInit {
  //formData: OrderItem;
  // itemList:Item[];
  //options: string[] = ['Poori', 'Vada', 'Dosa', 'a', 'b', 'c', 'd', 'zebra', 'chicken'];
  isAvailable: boolean;
  availableIndex: number;
  ItemIdTxt: number;
  PriceTxt: number;
  QuantityTxt: number;
  TotalTxt: number;
  ItemNameTxt: string;
  orderedItem;
  isKitchenOrders: boolean;

  //itemList = [];
  // itemList = [
  //   { itemId: 1, itemName: 'Dosa', Price: 40, itemGroup: 1 },
  //   { itemId: 2, itemName: 'Vada', Price: 30, itemGroup: 1 },
  //   { itemId: 3, itemName: 'Poori', Price: 50, itemGroup: 1 },
  //   { itemId: 4, itemName: 'Pizza', Price: 30, itemGroup: 3 },
  //   { itemId: 5, itemName: 'Burger', Price: 30, itemGroup: 3 },
  //   { itemId: 6, itemName: 'Veg Meals', Price: 30, itemGroup: 2 },
  //   { itemId: 7, itemName: 'Chilli Parota', Price: 30, itemGroup: 2 },
  //   { itemId: 8, itemName: 'Sambar Rice', Price: 30, itemGroup: 2 },
  //   { itemId: 9, itemName: 'Vangi Bath', Price: 30, itemGroup: 2 },
  //   { itemId: 10, itemName: 'Tomato Bath', Price: 30, itemGroup: 2 },
  //   { itemId: 11, itemName: 'Chapathi', Price: 30, itemGroup: 1 }
  // ];
  // itemId;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<OrderitemsComponent>,
    public orderService: OrderService,
    public toastr: ToastrService
  ) { }

  ngOnInit() {
    //console.log(this.data);
    //this.ItemIdTxt = 0;
    this.isKitchenOrders = false;
    if (this.data == 'kitchenOrders') {
      this.isKitchenOrders = true;
    }
    if (this.orderService.populateValues.itemId) {
      //console.log(this.orderService.populateValues.length);
      this.ItemIdTxt = this.orderService.populateValues.itemId;
      this.ItemNameTxt = this.orderService.populateValues.itemName;
      this.PriceTxt = this.orderService.populateValues.Price;
      this.QuantityTxt = this.orderService.populateValues.Quantity;
      this.TotalTxt = this.orderService.populateValues.Total;
    }
    console.log(this.ItemIdTxt);
  }
  // getPrice(index) {
  //   //console.log(price);
  //   this.PriceTxt = this.itemList[index - 1].Price;
  //   this.TotalTxt = this.itemList[index - 1].Price;
  //   this.QuantityTxt = 1;
  //   console.log(this.PriceTxt);
  // }
  updatePrice(Quantity) {
    this.TotalTxt = this.PriceTxt * Quantity;
  }
  updateItem() {
    if (!this.isKitchenOrders) {
      this.orderService.grandTotal = null;
      this.orderedItem = {};
      this.isAvailable = false;
      this.availableIndex = null;
      //this.orderService.grandTotal = null;
      if (this.orderService.orderItems.length > 0) {
        //console.log(this.orderService.orderItems.length);
        for (let i = 0; i < this.orderService.orderItems.length; i++) {
          if (this.orderService.orderItems[i].itemId == this.ItemIdTxt) {
            this.availableIndex = i;
            this.isAvailable = true;
          }
        }
      }
      if (this.isAvailable) {
        console.log('available' + this.isAvailable);
        this.orderService.orderItems[this.availableIndex].itemId = this.ItemIdTxt;
        this.orderService.orderItems[this.availableIndex].itemName = this.ItemNameTxt;
        this.orderService.orderItems[this.availableIndex].Price = this.PriceTxt;
        this.orderService.orderItems[this.availableIndex].Quantity = this.QuantityTxt,
          this.orderService.orderItems[this.availableIndex].Total = this.TotalTxt;
        console.log(this.orderService.orderItems);
        this.toastr.warning(this.ItemNameTxt + ' - ' + this.orderService.orderItems[this.availableIndex].Quantity, 'Item Quantity Updated')
      }
      if (this.orderService.orderItems.length > 0) {
        console.log('calculatetotal');
        for (let i = 0; i < this.orderService.orderItems.length; i++) {
          this.orderService.grandTotal += this.orderService.orderItems[i].Total;
        }
        console.log('total' + this.orderService.grandTotal);
      }
    }
    if (this.isKitchenOrders) {
      this.orderService.kitchenOrdersGrandTotal = null;
      this.orderedItem = {};
      this.isAvailable = false;
      this.availableIndex = null;
      //this.orderService.grandTotal = null;
      if (this.orderService.kitchenOrders.length > 0) {
        //console.log(this.orderService.orderItems.length);
        for (let i = 0; i < this.orderService.kitchenOrders.length; i++) {
          if (this.orderService.kitchenOrders[i].itemId == this.ItemIdTxt) {
            this.availableIndex = i;
            this.isAvailable = true;
          }
        }
      }
      if (this.isAvailable) {
        console.log('available' + this.isAvailable);
        this.orderService.kitchenOrders[this.availableIndex].itemId = this.ItemIdTxt;
        this.orderService.kitchenOrders[this.availableIndex].itemName = this.ItemNameTxt;
        this.orderService.kitchenOrders[this.availableIndex].Price = this.PriceTxt;
        this.orderService.kitchenOrders[this.availableIndex].Quantity = this.QuantityTxt,
          this.orderService.kitchenOrders[this.availableIndex].Total = this.TotalTxt;
        console.log(this.orderService.orderItems);
        this.toastr.warning(this.ItemNameTxt + ' - ' + this.orderService.kitchenOrders[this.availableIndex].Quantity, 'Item Quantity Updated')
      }
      if (this.orderService.kitchenOrders.length > 0) {
        console.log('calculatetotal');
        for (let i = 0; i < this.orderService.kitchenOrders.length; i++) {
          this.orderService.kitchenOrdersGrandTotal += this.orderService.kitchenOrders[i].Total;
        }
        console.log('kitchenorderstotal' + this.orderService.kitchenOrdersGrandTotal);
      }
    }
    this.ItemIdTxt = 0;
    this.PriceTxt = 0;
    this.QuantityTxt = 1;
    this.TotalTxt = null;
    this.dialogRef.close();
  }
  closeModal() {
    this.dialogRef.close();
  }
}