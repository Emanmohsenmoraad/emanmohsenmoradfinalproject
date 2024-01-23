import { Component, HostListener, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ProductsService } from '../products.service';
import { Productapi } from '../productapi';
import { SubscribeService } from '../subscribe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  subscribeCount: number = 0;

  cartitemcount!:number ;
  products!: Productapi[];
  searchQuery = '';
  searchResults!: Productapi[];



  constructor( private cartservice:CartService ,private productService:ProductsService,private subscribeService: SubscribeService,private router: Router,){

  }
  onSearch(): void {
    this.productService.searchProducts(this.searchQuery)
      .subscribe(products => {
        this.products = products;
      });
  }
  resetSearch(): void {
    this.searchQuery = ''; // Reset the search query
    this.searchResults = []; // Clear the search results
  }
  goToDetails(product: Productapi): void {  this.resetSearch();
    this.router.navigate(['details',product.id]);
  }

  ngOnInit(): void {
    this.cartservice.realcartcount.subscribe( (count)=>{ this.cartitemcount = count     }  );  
     this.subscribeService.countChanged.subscribe(count => {
      this.subscribeCount = count;
    });    ;
  }
  getfilteredProducts(): Productapi[] {
    if (this.searchQuery.trim() === '') {
      return this.searchResults;
     
    } console.log(this.searchResults);
    return this.products.filter(product =>
      product.title.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

}



