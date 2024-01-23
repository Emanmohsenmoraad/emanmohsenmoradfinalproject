import { Component } from '@angular/core';
import { Productapi } from '../productapi';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  productscart! : Productapi[];


  constructor (

    private Cservice:CartService,
  ){}
  ngOnInit(): void {
  

    this.productscart =   this.Cservice.getcartitem();


  }

  remove(id:number){

    this.Cservice.removeitem(id);
  }



}
