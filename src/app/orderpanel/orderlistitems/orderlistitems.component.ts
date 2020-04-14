import { Component, OnInit, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { OrderService } from 'src/app/shared/orderservice.service';
import { ToastrService } from 'ngx-toastr';
import { MAT_DIALOG_DATA } from '@angular/material'

@Component({
  selector: 'app-orderlistitems',
  templateUrl: './orderlistitems.component.html',
  styleUrls: ['./orderlistitems.component.css']
})
export class OrderlistitemsComponent implements OnInit {
  orderedItem = {};
  isAvailable: boolean;
  availableIndex: number;
  filterList = [];
  selectedValue: any;
  isKitchenOrders: boolean;
  itemList = [
    { itemId: 1, itemName: 'Dosa', Price: 40, itemGroup: 1 },
    { itemId: 2, itemName: 'Vada', Price: 30, itemGroup: 1 },
    { itemId: 3, itemName: 'Poori', Price: 50, itemGroup: 1 },
    { itemId: 4, itemName: 'Pizza', Price: 30, itemGroup: 3 },
    { itemId: 5, itemName: 'Burger', Price: 30, itemGroup: 3 },
    { itemId: 6, itemName: 'Veg Meals', Price: 30, itemGroup: 2 },
    { itemId: 7, itemName: 'Chilli Parota', Price: 30, itemGroup: 2 },
    { itemId: 8, itemName: 'Sambar Rice', Price: 30, itemGroup: 2 },
    { itemId: 9, itemName: 'Vangi Bath', Price: 30, itemGroup: 2 },
    { itemId: 10, itemName: 'Tomato Bath', Price: 30, itemGroup: 2 },
    { itemId: 11, itemName: 'Chapathi', Price: 30, itemGroup: 1 }
  ];
  dataSource = new MatTableDataSource(this.itemList);
  constructor(public orderService: OrderService,
    public toastr: ToastrService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.isKitchenOrders = false;
    if (this.data == 'kitchenOrders') {
      this.isKitchenOrders = true; 
    }
    this.selectedValue = 0;
  }
  filterItems(value) {
    // alert(value);
    console.log(value);
    this.itemList = this.itemList;
    switch (value) {
      case '0':
        //alert(0);
        // this.filterList = [];
        // this.filterList = this.itemList;
        // this.itemList = this.filterList;
        this.dataSource = new MatTableDataSource(this.itemList);
        break;
      case '1':
        //alert(1);
        this.filterList = [];
        for (let i = 0; i < this.itemList.length; i++) {
          if (this.itemList[i].itemGroup == 1) {
            this.filterList.push(this.itemList[i]);
          }
        }
        // this.itemList = this.filterList;
        this.dataSource = new MatTableDataSource(this.filterList);
        //alert(this.itemList.length);
        break;
      case '2':
        this.filterList = [];
        for (let i = 0; i < this.itemList.length; i++) {
          if (this.itemList[i].itemGroup == 2) {
            this.filterList.push(this.itemList[i]);
          }
        }
        //this.itemList = this.filterList;
        this.dataSource = new MatTableDataSource(this.filterList);
        break;
      case '3':
        this.filterList = [];
        for (let i = 0; i < this.itemList.length; i++) {
          if (this.itemList[i].itemGroup == 3) {
            this.filterList.push(this.itemList[i]);
          }
        }
        // this.itemList = this.filterList;
        this.dataSource = new MatTableDataSource(this.filterList);
        break;
    }
  };
  saveItem(item) {
    //console.log(this.data);
    if (!this.isKitchenOrders) {
      this.orderService.grandTotal = null;
      console.log(item);
      this.orderedItem = {};
      this.isAvailable = false;
      this.availableIndex = null;
      if (this.orderService.orderItems.length > 0) {
        //console.log(this.orderService.orderItems.length);
        for (let i = 0; i < this.orderService.orderItems.length; i++) {
          if (this.orderService.orderItems[i].itemId == item.itemId) {
            this.availableIndex = i;
            this.isAvailable = true;
            //alert('available');
          }
        }
      }
      if (this.isAvailable) {
        console.log('available' + this.isAvailable);
        this.orderService.orderItems[this.availableIndex].itemId = item.itemId;
        this.orderService.orderItems[this.availableIndex].itemName = item.itemName;
        this.orderService.orderItems[this.availableIndex].Price = item.Price;
        this.orderService.orderItems[this.availableIndex].Quantity = parseFloat(this.orderService.orderItems[this.availableIndex].Quantity) + 1,
          this.orderService.orderItems[this.availableIndex].Total = item.Price * this.orderService.orderItems[this.availableIndex].Quantity;
        console.log(this.orderService.orderItems);
        this.toastr.warning(item.itemName + ' - ' + this.orderService.orderItems[this.availableIndex].Quantity, 'Item Quantity Updated');
      }
      else {
        this.orderedItem = {
          itemId: item.itemId,
          itemName: item.itemName,
          Price: item.Price,
          Quantity: 1,
          Total: item.Price
        };
        this.orderService.orderItems.push(this.orderedItem);
        console.log(this.orderService.orderItems);
        this.toastr.success(item.itemName, 'Item Added to Cart');
      }
      if (this.orderService.orderItems.length > 0) {
        this.orderService.grandTotal = null;
        console.log('calculatetotal');
        for (let i = 0; i < this.orderService.orderItems.length; i++) {
          this.orderService.grandTotal += this.orderService.orderItems[i].Total;
        }
        console.log('total' + this.orderService.grandTotal);
      }
    }
    if (this.isKitchenOrders) {
      //alert();
      this.orderService.kitchenOrdersGrandTotal = null;
      console.log(item);
      this.orderedItem = {};
      this.isAvailable = false;
      this.availableIndex = null;
      if (this.orderService.kitchenOrders.length > 0) {
        //console.log(this.orderService.orderItems.length);
        for (let i = 0; i < this.orderService.kitchenOrders.length; i++) {
          if (this.orderService.kitchenOrders[i].itemId == item.itemId) {
            this.availableIndex = i;
            this.isAvailable = true;
            //alert('available');
          }
        }
      }
      if (this.isAvailable) {
        console.log('available' + this.isAvailable);
        this.orderService.kitchenOrders[this.availableIndex].itemId = item.itemId;
        this.orderService.kitchenOrders[this.availableIndex].itemName = item.itemName;
        this.orderService.kitchenOrders[this.availableIndex].Price = item.Price;
        this.orderService.kitchenOrders[this.availableIndex].Quantity = parseFloat(this.orderService.kitchenOrders[this.availableIndex].Quantity) + 1,
          this.orderService.kitchenOrders[this.availableIndex].Total = item.Price * this.orderService.kitchenOrders[this.availableIndex].Quantity;
        console.log(this.orderService.kitchenOrders);
        this.toastr.warning(item.itemName + ' - ' + this.orderService.kitchenOrders[this.availableIndex].Quantity, 'Item Quantity Updated');
      }
      else {
        this.orderedItem = {
          itemId: item.itemId,
          itemName: item.itemName,
          Price: item.Price,
          Quantity: 1,
          Total: item.Price
        };
        this.orderService.kitchenOrders.push(this.orderedItem);
        this.toastr.success(item.itemName, 'Item Added to Cart');
      }
      if (this.orderService.kitchenOrders.length > 0) {
        this.orderService.kitchenOrdersGrandTotal = null;
        console.log('calculatetotal');
        for (let i = 0; i < this.orderService.kitchenOrders.length; i++) {
          this.orderService.kitchenOrdersGrandTotal += this.orderService.kitchenOrders[i].Total;
        }
        console.log('kitchenOrderstotal' + this.orderService.kitchenOrdersGrandTotal);
      }
    }
  };
  getQuantity(item) {
    if (!this.isKitchenOrders) {
      if (this.orderService.orderItems.length > 0) {
        //console.log(this.orderService.orderItems.length);
        for (let i = 0; i < this.orderService.orderItems.length; i++) {
          if (this.orderService.orderItems[i].itemId == item.itemId) {
            // this.availableIndex = i;
            // this.isAvailable = true;
            //alert('available');
            //this.orderService.orderItems[i].Quantity;
            return this.orderService.orderItems[i].Quantity;
          }
        }
      }
    }
    if (this.isKitchenOrders) {
      //alert();
      if (this.orderService.kitchenOrders.length > 0) {
        //console.log(this.orderService.orderItems.length);
        for (let i = 0; i < this.orderService.kitchenOrders.length; i++) {
          if (this.orderService.kitchenOrders[i].itemId == item.itemId) {
            // this.availableIndex = i;
            // this.isAvailable = true;
            //alert('available');
            //this.orderService.orderItems[i].Quantity;
            //console.log(this.orderService.kitchenOrders[i].Quantity);
            return this.orderService.kitchenOrders[i].Quantity;
          }
        }
      }
    }
  };
  checkIfItemExists(item) {
    if (!this.isKitchenOrders) {
      if (this.orderService.orderItems.length == 0) {
        return true;
      }
      if (this.orderService.orderItems.length > 0) {
        //console.log(this.orderService.orderItems.length);
        for (let i = 0; i < this.orderService.orderItems.length; i++) {
          if (this.orderService.orderItems[i].itemId == item.itemId) {
            // this.availableIndex = i;
            // this.isAvailable = true;
            //alert('available');
            this.orderService.orderItems[i].Quantity;
            return true;
          }
        }
      }
    }
    if (this.isKitchenOrders) {
      if (this.orderService.kitchenOrders.length == 0) {
        return true;
      }
      if (this.orderService.kitchenOrders.length > 0) {
        //console.log(this.orderService.orderItems.length);
        for (let i = 0; i < this.orderService.kitchenOrders.length; i++) {
          if (this.orderService.kitchenOrders[i].itemId == item.itemId) {
            // this.availableIndex = i;
            // this.isAvailable = true;
            //alert('available');
            this.orderService.kitchenOrders[i].Quantity;
            return true;
          }
        }
      }
    }
  };
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  };
}
