export interface TransactionResponse {
    cryptoName:string
    cryptoAmount: number,
    amount: number
    status: string
    transactionLink: string
    created:Date,
    _24hrRate:number,
    _7hrRate:number
  }