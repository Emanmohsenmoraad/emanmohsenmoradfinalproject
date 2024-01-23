import { Component , OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Productapi, Rating } from '../productapi';
import { ProductsService } from '../products.service';
import { Observable } from 'rxjs/internal/Observable';
import { CartService } from '../cart.service';
 

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent   implements OnInit {

  id!:number;
  items!: Productapi[];
  product!: Observable<Productapi>;
products!: Observable<Productapi>;
category!: string;
currentprod!:Productapi;
  relatedProducts!: Productapi[];
  productts!: Productapi[];
  selectedItem!: Productapi;
  

  constructor(private productsService: ProductsService,
     private route :ActivatedRoute ,
     private router: Router,
     private Cservice:CartService
   
  ){

  }
  ngOnInit(): void { this.fetchItems();
    const productId = this.id = this.route.snapshot.params['id'];
    this.product = this.productsService.getProductDetails(this.id);
    console.log(this.id);
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.product = this.productsService.getProductDetails(this.id);
      console.log(this.id);
    }); 
    
   
    this.route.params.subscribe(params => {
      const selectedItemId = params['id'];

      this.productsService.getProductDetails(selectedItemId)
        .subscribe(item => {
          this.selectedItem = item;
          this. fetchRelatedProducts(item.category);
        });
    });




  }
    fetchRelatedProducts(category: string) {
    this.productsService.getProductsByCategory(category)
      .subscribe(products => {
        // Exclude the currently selected item from the related products list
        this.relatedProducts = products.filter(product => product.id !== this.selectedItem.id).slice(0,4);
      });
  }

  fetchItems() {
    const limit = 4;
    this.productsService.getItems(limit).subscribe(items => {
      // Filter out the current product from the list
      this.items = items.filter(items => items.id !== this.id);
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


}
