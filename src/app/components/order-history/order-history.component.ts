import { Component, OnInit } from '@angular/core';
import { OrderHistory } from 'src/app/common/order-history';
import { AuthService } from 'src/app/services/auth.service';
import { OrderHistoryService } from 'src/app/services/order-history.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {

  orderHistoryList: OrderHistory[] = [];
  storage: Storage = sessionStorage;

  constructor(private orderHistoryService: OrderHistoryService, private authService: AuthService) { }

  ngOnInit(): void {
    this.handleOrderHistory();
  }

  handleOrderHistory() {

    // read the user's email address from browser storage
    const theEmail = this.authService.getUserDetails();

    console.log("theEmail", theEmail);

    // retrieve data from the service
    if(theEmail){
      this.orderHistoryService.getOrderHistory(theEmail).subscribe(
        data => {
          this.orderHistoryList = data._embedded.orders;
        }
      );

    }
    
  }

}
