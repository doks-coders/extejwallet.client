export interface CryptoInfoResponse {
    name:string
    nickName:string
    currentPrice:number //to 1 usd
    changeRate:number
    rateIntervals:string //contains the Json stringified days and prices
    holdings:number
  }

 
  