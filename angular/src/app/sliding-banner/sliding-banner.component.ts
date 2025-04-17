import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sliding-banner',
  imports: [],
  templateUrl: './sliding-banner.component.html',
  styleUrl: './sliding-banner.component.css'
})
export class SlidingBannerComponent implements AfterViewInit, OnDestroy{
  @ViewChild('carousel') carousel!: ElementRef;
  private intervalId: any;

  // Function to scroll to the next item
  scrollToNextItem(): void {
    const carouselElement = this.carousel.nativeElement;
    const itemWidth = carouselElement.querySelector('.carousel-item').offsetWidth;
    if(carouselElement.scrollLeft >= carouselElement.scrollWidth-itemWidth)
      carouselElement.scrollTo({left:0})
    carouselElement.scrollBy({
      left: itemWidth,
      behavior: 'smooth'
    });
  }

  // Function to scroll to the previous item
  scrollToPrevItem(): void {

    const carouselElement = this.carousel.nativeElement;
    const itemWidth = carouselElement.querySelector('.carousel-item').offsetWidth;
    if(carouselElement.scrollLeft == 0)
      carouselElement.scrollTo({left:carouselElement.scrollWidth})
    carouselElement.scrollBy({
      left: -itemWidth,
      behavior: 'smooth'
    });
  }
  ngAfterViewInit() {
    // Set interval to call scrollToNext every 3 seconds
    this.intervalId = setInterval(() => {
      this.scrollToNextItem();
    }, 10000);  // 3000ms = 3 seconds
  }
  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId); // Stop the interval when the component is destroyed
    }
  }
}
