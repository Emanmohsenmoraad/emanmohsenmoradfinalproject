import { Component, OnInit } from '@angular/core';
import { Productapi, Rating } from '../productapi';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements  OnInit {


  products!: Productapi[];
  highestRatedProducts!: Productapi[];
   items!: Productapi[];
   constructor(private productsService: ProductsService) { }
   topProducts!: Productapi[];
 
   ngOnInit() {

    this.productsService.getProducts().subscribe(
     
     products => {
       // Sort products based on rate (descending) and visitor count (descending)
       products.sort((a, b) => {
         if (a.rating.rate !== b.rating.rate) {
          /* return b.rating.rate- a.rating.rate;*/
         }
         return b.rating.count - a.rating.count;
       });
       this.topProducts = products.slice(0, 3);
     }
   );
   }
   getFilledStars(rate: number): Rating[] {
    const filledCount = Math.min(rate, 5);
    const filledStars: Rating[] = [];
    for (let i = 0; i < filledCount; i++) {
      filledStars.push({ rate: 1, count: 1 }); console.log(filledStars);
    }
    return filledStars;
   
  }

  
  getEmptyStars(rate: number): Rating[] {
    const emptyCount = Math.min( rate,5); // Calculate the number of empty stars based on the remaining count
    const emptyStars: Rating[] = [];
    for (let i = 1; i < emptyCount; i++) {
      emptyStars.push({ rate: 0, count: 0 });
    }
    return emptyStars;
  }

}
