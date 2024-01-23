import { Component, OnInit } from '@angular/core';
import { Productapi, Rating } from '../productapi';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent  implements OnInit {
  pageNumbers: number[]=[];
  constructor(private productsService: ProductsService, private router: Router,private Cservice:CartService) { }
  products!: Productapi[] ;
  pageSize: number = 9;
  currentPage: number = 1;
  totalPages!: number;
  items:Productapi[]=[];



 ngOnInit() {    this.loadProducts();

   this.productsService.getProducts().subscribe((products: Productapi[]) => {
     this.products = products;
   });
 }   
 selectedSortOption: string='item';

onSortOptionChange(): void {
  if (this.selectedSortOption === 'featured') {
    this.router.navigate(['../featured']);
  }else if(this.selectedSortOption === 'item'){  this.router.navigate(['../cat']);}
else if(this.selectedSortOption === 'atoz'){  this.router.navigate(['../atoz']);}
}

addtocart( product:Productapi){
  
  this.Cservice.addtocart(product) ;
  console.log(product);
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

loadProducts() {
  this.productsService.getProducts().subscribe(items => {
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
