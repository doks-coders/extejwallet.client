import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TransactionResponse } from '../_models/response/transaction.response';
import { CryptoInfoResponse } from '../_models/response/crypto-info.response';
import { CardResponse } from '../_models/response/card.response';
import { CryptoBalanceResponses } from '../_models/response/crypto-balance.response';
import { TotalPricesResponse } from '../_models/response/total-price.response';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WalletService {


  baseUrl=environment.apiUrl;
  cryptoHandler = new BehaviorSubject<{ [key: string]: number }|null >(null)
  $cryptoAvailable = this.cryptoHandler.asObservable();

  
  constructor(private http:HttpClient) { }

  getMyTransactions(){
    return this.http.get<TransactionResponse []>(this.baseUrl+"wallet/get-my-transactions")
  }

  getCryptoInformation(){
    return this.http.get<CryptoInfoResponse []>(this.baseUrl+"wallet/get-crypto-information").pipe(map(val=>{
      let object: { [key: string]: number } = {};
      val.forEach(el=>{
        object[el.nickName]=el.currentPrice
      })
      this.cryptoHandler.next(object);
      return val;
    }))
  }

  getMyCards(){
    return this.http.get<CardResponse []>(this.baseUrl+"wallet/get-my-cards")
  }

  getMyCrypto(){
    return this.http.get<CryptoBalanceResponses []>(this.baseUrl+"wallet/get-my-crypto")
  }
  getTotalPrices(){
    return this.http.get<TotalPricesResponse>(this.baseUrl+"wallet/get-total-prices")
  }

  
}
