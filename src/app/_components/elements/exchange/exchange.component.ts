import { Component, OnInit } from '@angular/core';
import { CryptoInfoResponse } from 'src/app/_models/response/crypto-info.response';
import { WalletService } from 'src/app/_services/wallet.service';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.css']
})
export class ExchangeComponent implements OnInit {
  constructor(private walletService:WalletService){}
  cryptoPrices?:{ [key: string]: number } 

  cryptoAmount:number=0;
  realAmount:number=0;

  selectedCurrency:string="";
  selectedCrypto:string ="";
  selectedBuySell:string=""
  cryptoPrice:number=0


  calculatedPrice:number=0;


  ngOnInit(): void {
    this.walletService.$cryptoAvailable.subscribe({
      next:(val)=>{
        if(val){
          this.cryptoPrices = val;
          this.refresh()
        }
      }
    })
  }
 
  buy_sell = [
    { text: 'BUY'},
    { text: 'SELL'},
   
  ];

  getRealCurrency(event:any){
    let prices =this.getCryptoPrice(this.selectedCrypto);
    this.cryptoAmount = event/prices
    this.calculatedPrice = event;
  }
  getCryptoCurrency(event:any){
  let prices =this.getCryptoPrice(this.selectedCrypto);
  this.calculatedPrice = event * prices;
  this.realAmount = this.calculatedPrice;
  }

  refresh(){
    this.cryptoPrice =  this.getCryptoPrice(this.selectedCrypto)
     this.cryptoAmount = this.realAmount/this.cryptoPrice 
  }

  getCryptoPrice(cryptoName:string){
    if(!this.cryptoPrices)return 0;
    switch (cryptoName) {
      case "USDC":
        return this.cryptoPrices["USD"]
        case "BTC":
        return this.cryptoPrices["BTC"]
        case "ETH":
         return this.cryptoPrices["ETH"]
      default:
        return 0
    }
  }
  selectBuyOrSell(event:any){
    this.selectedBuySell = event;
    this.refresh();
  }

  selectRealCurrency(event:any){
    this.selectedCurrency = event;
    this.refresh();
  }
  selectCrypto(event:any){
    this.selectedCrypto = event;
    this.refresh();
  }
  crypto = [
    { text: 'USDC', image: 'assets/icons/usdc.svg' },
    { text: 'BTC', image: 'assets/icons/bitcoin.svg' },
    { text: 'ETH',image: 'assets/icons/ethereum.svg'},
  ];
 real_currency = [
   // { text: 'EUR', image: 'assets/icons/eu.svg' },
    { text: 'USD', image: 'assets/icons/usa.svg' },
    //{ text: 'GPB',image: 'assets/icons/britain.svg'},
  ];

}

        
    /**
     
"BTC"

"USD"

"BIN"
 
"ETH"

"XRP"
     */
