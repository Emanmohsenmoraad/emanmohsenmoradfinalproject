import { Component,OnInit } from '@angular/core';
import { Productapi, Rating } from '../productapi';
import { ProductsService } from '../products.service';
import { CartService } from '../cart.service';
import { FavService } from '../fav.service';
@Component({
  selector: 'app-jewelar',
  templateUrl: './jewelar.component.html',
  styleUrls: ['./jewelar.component.css']
})
export class JewelarComponent implements OnInit{
  constructor(private productsService: ProductsService,private Cservice:CartService,private pservice:FavService) {}
  products!: Productapi[];

   ngOnInit()    : void {
  const category = "jewelery"; // Replace with the category you want to filter by
  this.productsService.getProductsByCategory(category).subscribe(
    (products: Productapi[]) => {
      this.products = products;
    });}
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
    addtocart( product:Productapi){
  
      this.Cservice.addtocart(product) ;
      console.log(product);
    }
    addtocart1( productt:Productapi){
  
      this.pservice.addtocart1(productt) ;
      console.log(productt);
    }
}
