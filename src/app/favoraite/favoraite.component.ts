import { Component } from '@angular/core';
import { Productapi } from '../productapi';
import { FavService } from '../fav.service';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-favoraite',
  templateUrl: './favoraite.component.html',
  styleUrls: ['./favoraite.component.css']
})
export class FavoraiteComponent {
  productscart! : Productapi[];


  constructor (

    private Cservice:FavService,
    private pservice:CartService,
  ){}
  ngOnInit(): void {
  

    this.productscart =   this.Cservice.getcartitem1();


  }

  remove(id:number){

    this.Cservice.removeitem1(id);
  }
  addtocart( product:Productapi){
  
    this.pservice.addtocart(product) ;
    console.log(product);
  }

}
