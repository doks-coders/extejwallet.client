import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { CardResponse } from 'src/app/_models/response/card.response';
import { CryptoBalanceResponses } from 'src/app/_models/response/crypto-balance.response';
import { CryptoInfoResponse } from 'src/app/_models/response/crypto-info.response';
import { TransactionResponse } from 'src/app/_models/response/transaction.response';
import { WalletService } from 'src/app/_services/wallet.service';

interface responses {
  name: string
  nickName: string
  currentPrice: number //to 1 usd
  changeRate: number
  rateIntervals: string //contains the Json stringified days and prices
}





@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {
  totalBalance: number = 0;
  fiatBalance: number = 0;
  cryptoBalance: number = 0;
  
  transactions:TransactionResponse [] = [];

  constructor(private walletService:WalletService){

   
  }

  ngOnInit(): void {
    this.walletService.getCryptoInformation().pipe(take(1)).subscribe({
      next:(cryptoInfo)=>{
        this.crypto_infos = cryptoInfo
      }
    })

    this.walletService.getMyCards().pipe(take(1)).subscribe({
      next:(cards)=>{
        this.account_cards = cards
      }
    })

    this.walletService.getMyCrypto().pipe(take(1)).subscribe({
      next:(my_crypto)=>{
        this.crypto_balance = my_crypto
      }
    })

    this.walletService.getTotalPrices().pipe(take(1)).subscribe({
      next:(totalPrices)=>{
        this.fiatBalance = totalPrices.fiat;
        this.totalBalance = totalPrices.total;
        this.cryptoBalance =totalPrices.crypto
      }
    })

    this.walletService.getMyTransactions().pipe(take(1)).subscribe({
      next:(transactions)=>{
        this.transactions = transactions
      }
    })
  }

  
  crypto_balance: CryptoBalanceResponses[] = [{
    name: "Bitcoin",
    totalBalance: 1000000
  },
  {
    name: "Ethereum",
    totalBalance: 1000000
  },
  {
    name: "Binance Coin",
    totalBalance: 1000000
  },
  {
    name: "USD Coin",
    totalBalance: 1000000
  }
  ]
  crypto_infos: CryptoInfoResponse[] = [{
    name: "Bitcoin",
    nickName: "BTC",
    currentPrice: 750000, //to 1 usd
    changeRate: 0.5,
    rateIntervals: this.getItems(), //"[{\"hour\":\"Jan\",\"rate\":26000},{\"hour\":\"Feb\",\"rate\":27500},{\"hour\":\"Mar\",\"rate\":29000},{\"hour\":\"Apr\",\"rate\":30500},{\"hour\":\"May\",\"rate\":31500},{\"hour\":\"Jun\",\"rate\":33500},{\"hour\":\"Jul\",\"rate\":34500},{\"hour\":\"Aug\",\"rate\":35500},{\"hour\":\"Sep\",\"rate\":36500}]", //contains the Json stringified days and prices
    holdings: 10
  },
  {
    name: "Bitcoin",
    nickName: "BTC",
    currentPrice: 750000, //to 1 usd
    changeRate: -0.5,
    rateIntervals: "[{\"hour\":\"Jan\",\"rate\":26000},{\"hour\":\"Feb\",\"rate\":27500},{\"hour\":\"Mar\",\"rate\":29000},{\"hour\":\"Apr\",\"rate\":30500},{\"hour\":\"May\",\"rate\":31500},{\"hour\":\"Jun\",\"rate\":33500},{\"hour\":\"Jul\",\"rate\":34500},{\"hour\":\"Aug\",\"rate\":35500},{\"hour\":\"Sep\",\"rate\":36500}]", //contains the Json stringified days and prices
    holdings: 10
  },
  {
    name: "Bitcoin",
    nickName: "BTC",
    currentPrice: 750000, //to 1 usd
    changeRate: 0.5,
    rateIntervals: "[{\"hour\":\"Jan\",\"rate\":26000},{\"hour\":\"Feb\",\"rate\":27500},{\"hour\":\"Mar\",\"rate\":29000},{\"hour\":\"Apr\",\"rate\":30500},{\"hour\":\"May\",\"rate\":31500},{\"hour\":\"Jun\",\"rate\":33500},{\"hour\":\"Jul\",\"rate\":34500},{\"hour\":\"Aug\",\"rate\":35500},{\"hour\":\"Sep\",\"rate\":36500}]", //contains the Json stringified days and prices
    holdings: 10
  },
  {
    name: "Bitcoin",
    nickName: "BTC",
    currentPrice: 750000, //to 1 usd
    changeRate: 0.5,
    rateIntervals: "[{\"hour\":\"Jan\",\"rate\":26000},{\"hour\":\"Feb\",\"rate\":27500},{\"hour\":\"Mar\",\"rate\":29000},{\"hour\":\"Apr\",\"rate\":30500},{\"hour\":\"May\",\"rate\":31500},{\"hour\":\"Jun\",\"rate\":33500},{\"hour\":\"Jul\",\"rate\":34500},{\"hour\":\"Aug\",\"rate\":35500},{\"hour\":\"Sep\",\"rate\":36500}]", //contains the Json stringified days and prices
    holdings: 10
  }]

  
/**
 * 
 * Name
DebitNumber
Color

Mastercard : light blue
Visa : o
American Express
Discover Financial


 */
  account_cards:CardResponse [] = [{
    name:"Visa",
    debitNumber:492090940
  },
  {
    name:"Mastercard",
    debitNumber:492090940
  },
  {
    name:"American Express",
    debitNumber:492090940
  },
  {
    name:"Discover Financial",
    debitNumber:492090940
  },
]
 

  getItems():string{
    let hours = 25
    let object:any [] = []
    for(let i=0;i<hours;i++){
      let hours = i+1;
      let rate = this.getRandomNumber(20000,21000)
      object.push({hour:hours,rate:Math.round(rate)})
    }
    return JSON.stringify(object)
  }

  getRandomNumber(min:number, max:number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}

