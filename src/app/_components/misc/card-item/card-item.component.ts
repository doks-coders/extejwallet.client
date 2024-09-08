import { Component, Input } from '@angular/core';
import { CardResponse } from 'src/app/_models/response/card.response';
interface Style {
  backgroundColor: string,
  imageName: string
}
@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent {
  @Input() card?: CardResponse

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


  getStyle(cardName: string): Style {
    let style: Style = { backgroundColor: '', imageName: '' }
    switch (cardName) {
      case "Mastercard":
        style.backgroundColor="from-yellow-500";
        style.imageName = "master-card";
        return style;
      case "Visa":
        style.backgroundColor="from-orange-500";
        style.imageName = "visa";
        return style;
      case "American Express":
        style.backgroundColor="from-red-500";
        style.imageName = "american-express";
        return style;
      case "Discover Financial":
        style.backgroundColor="from-green-500";
        style.imageName="discover"
        return style;
      default:
        return style;
    }
  }
}
