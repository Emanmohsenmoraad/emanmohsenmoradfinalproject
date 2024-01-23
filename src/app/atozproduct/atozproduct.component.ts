import { Component } from '@angular/core';
import { Productapi, Rating } from '../productapi';
import { ProductsService } from '../products.service';
import { OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FavService } from '../fav.service';


@Component({
  selector: 'app-atozproduct',
  templateUrl: './atozproduct.component.html',
  styleUrls: ['./atozproduct.component.css']
})
export class AtozproductComponent implements OnInit {
  constructor(private productsService: ProductsService,private Cservice:CartService,private pservice:FavService) { }
  products!: Productapi[] ;
  pageSize: number = 9;
  currentPage: number = 1;
  totalPages!: number;
  items:Productapi[]=[];
  pageNumbers: number[]=[];

 ngOnInit() {this.loadProducts();
   this.productsService.getalphabetProducts().subscribe((products: Productapi[]) => {
     this.products = products;
   });
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
}   addtocart( product:Productapi){
  
  this.Cservice.addtocart(product) ;
  console.log(product);
}
addtocart1( productt:Productapi){
  
  this.pservice.addtocart1(productt) ;
  console.log(productt);
}
loadProducts() {
  this.productsService.getalphabetProducts().subscribe(items => {
    this.items = items;
    this.totalPages = Math.ceil(this.items.length / this.pageSize);
    this.pageNumbers = Array.from({ length: this.totalPages }, (_, i) => i + 1);
  });
}


goToPage(pageNumber: number) {
  if (pageNumber >= 1 && pageNumber <= this.totalPages) {
    this.currentPage = pageNumber;
    this.products = this.getProductsForCurrentPage();
  }
}
getProductsForCurrentPage(): Productapi[] {
  const startIndex = (this.currentPage - 1) * this.pageSize;
  const endIndex = startIndex + this.pageSize;
  return this.items.slice(startIndex,endIndex);
}


}
