import { Component , ViewChild, ElementRef, Input, viewChild } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component';
import {CommonModule} from '@angular/common'
@Component({
  selector: 'app-category',
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  public products: any[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
  public index: number = 0

  @ViewChild('scrollable') scrollableRef!: ElementRef;
  @ViewChild('top') scrollTop! :ElementRef;
  isDragging = false;
  startX = 0;
  scrollLeft = 0;

  @Input()prodSize:number =48
  @Input()mdProdSize:number =72

  isCollaped:boolean = true

  onDragStart(event: MouseEvent): void {
    if(this.isCollaped){
      this.isDragging = true;
      this.startX = event.pageX - this.scrollableRef.nativeElement.offsetLeft;
      this.scrollLeft = this.scrollableRef.nativeElement.scrollLeft;
    }
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


  viewAll(): number{
    return this.isCollaped? 12 : this.products.length+1
  }
  toggleView(): void{
    this.isCollaped = !this.isCollaped;
    this.scrollTop.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

}
