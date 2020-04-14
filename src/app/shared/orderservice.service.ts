import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
orderItems = [];
OrderNoTxt:string;
CustomerNumberTxt:string;
CustomerNameTxt:string;
isEditItem:boolean;
grandTotal:number;
populateValues;
allOrders = [];
allKitchenOrders = [];
kitchenOrders = [];
kitchenOrdersGrandTotal:number;
deleteItemId:number;
isLogin:boolean;
isCashier:boolean;
isAdmin:boolean;
isServer:boolean;
  constructor() { }
}
