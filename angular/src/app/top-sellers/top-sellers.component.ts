import { Component,  } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component';
@Component({
  selector: 'app-top-sellers',
  imports: [ProductItemComponent],
  templateUrl: './top-sellers.component.html',
  styleUrl: './top-sellers.component.css'
})
export class TopSellersComponent {

}
