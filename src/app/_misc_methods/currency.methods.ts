export const getCurrencySign = (price:number|string)=>{
    let confirmedPrice='';
    if(typeof(price)=='number'){
        confirmedPrice = price.toString();
    }
    return confirmedPrice;
}