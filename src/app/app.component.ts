import { Component } from '@angular/core';
import { OrderService } from './shared/orderservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BillingPOS';
  constructor(public service:OrderService){}
}
