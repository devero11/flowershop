import { Component , ViewChild, ElementRef, Input } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component';
import {CommonModule} from '@angular/common'
@Component({
  selector: 'app-category',
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  public products: any[] = [1,1,1,1,1,1,1]
  public index: number = 0


@ViewChild('scrollable') scrollableRef!: ElementRef;

  isDragging = false;
  startX = 0;
  scrollLeft = 0;

  @Input()prodSize:number =64
  @Input()mdProdSize:number =96

  onDragStart(event: MouseEvent): void {
    this.isDragging = true;
    this.startX = event.pageX - this.scrollableRef.nativeElement.offsetLeft;
    this.scrollLeft = this.scrollableRef.nativeElement.scrollLeft;
  }

  onDragging(event: MouseEvent): void {
    if (!this.isDragging) return;
    event.preventDefault(); // prevents text selection
    const x = event.pageX - this.scrollableRef.nativeElement.offsetLeft;
    const walk = x - this.startX;
    this.scrollableRef.nativeElement.scrollLeft = this.scrollLeft - walk;
  }

  onDragEnd(): void {
    this.isDragging = false;
  }
}
