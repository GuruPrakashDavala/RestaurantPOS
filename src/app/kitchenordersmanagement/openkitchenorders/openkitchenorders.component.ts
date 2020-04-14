import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { OrderService } from 'src/app/shared/orderservice.service';
@Component({
  selector: 'app-openkitchenorders',
  templateUrl: './openkitchenorders.component.html',
  styleUrls: ['./openkitchenorders.component.css']
})
export class OpenkitchenordersComponent implements OnInit {

  constructor(
    public service: OrderService,
    public dialogRef: MatDialogRef<OpenkitchenordersComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) { }
  displayedColumns: string[] = ['TableNumber', 'CustomerName', 'CustomerNumber', 'GrandTotal', 'Actions'];
  dataSource = new MatTableDataSource(this.data);
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  ngOnInit() {
    console.log(this.data);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  addKitchenOrder(item) {
    console.log(item);
    this.service.OrderNoTxt = item.OrderNo;
    this.service.CustomerNameTxt = item.CustomerName;
    this.service.CustomerNumberTxt = item.CustomerNumber;
    this.service.grandTotal = item.GrandTotal;
    this.service.orderItems = item.orderHistory;
    console.log(this.service.orderItems);
    this.dialogRef.close();
  }
}
