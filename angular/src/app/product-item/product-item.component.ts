import {Input, Component } from '@angular/core';

@Component({
  selector: 'app-product-item',
  imports: [],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input() picUrl:string = "assets/images/placeholder/ChatGPT Image Apr 16, 2025, 03_32_14 PM.png"
  @Input() name:string = "Tulip Triumph"
}
