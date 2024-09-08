import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-crypto-balance',
  templateUrl: './crypto-balance.component.html',
  styleUrls: ['./crypto-balance.component.css']
})
export class CryptoBalanceComponent {
  @Input()totalBalance:number = 0 
  @Input()cryptoName:string = ""

  getStyle(cardName: string) {
    let style = { backgroundColor: '', imageName: '' }
    switch (cardName) {
      case "Bitcoin":
        style.backgroundColor="bg-orange-500";
        return style;
      case "Ethereum":
        style.backgroundColor="bg-blue-400";
        return style;
      case "Binance Coin":
        style.backgroundColor="bg-yellow-500";
        return style;
      case "USD Coin":
        style.backgroundColor="bg-blue-500";
        return style;
      default:
        return style;
    }
  }
}
