import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog, MatDialogConfig } from '@angular/material';
import { OrderService } from '../shared/orderservice.service';
import { VieworderComponent } from './vieworder/vieworder.component';
@Component({
  selector: 'app-allorders',
  templateUrl: './allorders.component.html',
  styleUrls: ['./allorders.component.css']
})
export class AllordersComponent implements OnInit {
  //options:string[] = ['Angular','React','Vue'];
  SearchTxt:string;
  constructor(public service: OrderService,
    private dialog: MatDialog ) { }
  displayedColumns: string[] = ['OrderNo','CustomerName', 'CustomerNumber', 'GrandTotal','PaymentMethod', 'TotalCash','RemainingCash','CardNumber','Date','vieworder'];
  dataSource = new MatTableDataSource(this.service.allOrders);
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  ngOnInit() {
    console.log(this.service.allOrders);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  applyFilter(value: string) {
    this.dataSource.filter = value.trim().toLowerCase();
  }
  vieworder(orderHistory){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.disableClose = true;
    dialogConfig.width = "60%";
    dialogConfig.data = orderHistory;
    this.dialog.open(VieworderComponent, dialogConfig);
  }
}
