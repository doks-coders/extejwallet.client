import { Component, Input, OnInit } from '@angular/core';
import { CryptoInfoResponse } from 'src/app/_models/response/crypto-info.response';

interface RateInterval{
  hour:string,
  rate:number
}
@Component({
  selector: 'app-chart-box',
  templateUrl: './chart-box.component.html',
  styleUrls: ['./chart-box.component.css']
})
export class ChartBoxComponent implements OnInit{

@Input() info?:CryptoInfoResponse
hours:string [] = [];
rates:number [] = []
ngOnInit(): void {
  if(this.info){
    let object:RateInterval [] = JSON.parse(this.info.rateIntervals)

    this.hours = object.map(u=>u.hour)
    this.rates = object.map(u=>u.rate)
  }
}

}
