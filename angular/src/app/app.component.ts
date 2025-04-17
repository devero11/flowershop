import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { SlidingBannerComponent } from './sliding-banner/sliding-banner.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { TopSellersComponent} from './top-sellers/top-sellers.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavigationComponent, SlidingBannerComponent,ProductItemComponent, TopSellersComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular';
}
