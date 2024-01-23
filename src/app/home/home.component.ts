import { Component, OnInit } from '@angular/core';
import { Productapi } from '../productapi';
import { ProductsService } from '../products.service';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items!: Productapi[];
  constructor(private productsService: ProductsService) { }
  ngOnInit() {
 this.fetchItems();
  }
  fetchItems() {
    const limit = 3; // Specify the limit for the number of items
    this.productsService.getItems(limit)
      .subscribe(items => {
        this.items = items;
      }); 
  }
  
}




