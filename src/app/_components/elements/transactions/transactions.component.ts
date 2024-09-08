import { Component, Input } from '@angular/core';
import { TransactionResponse } from 'src/app/_models/response/transaction.response';



@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent {
  @Input() transactions:TransactionResponse [] = [];

  isAsc = true;
  sortColumn = '';

  sortTable(column: string) {
    this.isAsc = this.sortColumn === column ? !this.isAsc : true;
    this.sortColumn = column;

    this.transactions.sort((a: any, b: any) => {
      const valueA = a[column];
      const valueB = b[column];

      if (typeof valueA === 'number' && typeof valueB === 'number') {
        return this.isAsc ? valueA - valueB : valueB - valueA;
      } else {
        return this.isAsc
          ? valueA.toString().localeCompare(valueB.toString())
          : valueB.toString().localeCompare(valueA.toString());
      }
    });
  }
}

/**
 * { 
      cryptoName: 'Bitcoin',
      status:'Sent',
      amount:14000,
      cryptoAmount:3000,
      transactionLink:'x7877878ghtcchtch89',
      created :new Date()
    },
    { 
      cryptoName: 'Ethereum',
      status:'Recieved',
      amount:2020,
      cryptoAmount:3000,
      transactionLink:'x7877878ghtcchtch89',
      created :new Date()
    },
    { 
      cryptoName: 'Binance Coin',
      status:'Sent',
      amount:44000,
      cryptoAmount:3000,
      transactionLink:'x7877878ghtcchtch89',
      created :new Date()
    },
 */