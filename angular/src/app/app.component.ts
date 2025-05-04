import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { SlidingBannerComponent } from './sliding-banner/sliding-banner.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { TopSellersComponent} from './top-sellers/top-sellers.component';
import { CategoryComponent } from './category/category.component';
import { CallChatComponent } from './call-chat/call-chat.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';

@Component({
  selector: 'app-root',
  imports: [DisclaimerComponent , RouterOutlet,NavigationComponent, SlidingBannerComponent,ProductItemComponent, TopSellersComponent, CategoryComponent ,CallChatComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular';
}
