import {Input, Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-product-item',
  imports: [],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent implements OnInit{
  @Input() picUrl:string = "assets/images/placeholder/"
  @Input() name:string = "Tulip Triumph"
  placeholders: string[] = ["ChatGPT Image Apr 16, 2025, 03_32_14 PM.png", "ChatGPT Image Apr 16, 2025, 03_32_20 PM.png", "ChatGPT Image Apr 16, 2025, 03_32_43 PM.png", "ChatGPT Image Apr 16, 2025, 03_33_05 PM.png" ]
  ngOnInit(){
    //placeholder, remove later
    this.picUrl+= this.placeholders[Math.floor((Math.random() * 4))]
  }
}
