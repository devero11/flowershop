import {Input, Component } from '@angular/core';

@Component({
  selector: 'app-product-item',
  imports: [],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input() picUrl:string = "https://i.imgur.com/2g3fOuW.png"
  @Input() name:string = "Tulip Triumph"
}
