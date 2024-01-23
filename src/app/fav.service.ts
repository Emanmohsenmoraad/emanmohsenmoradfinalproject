import { Injectable } from '@angular/core';
import { Productapi } from './productapi';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavService {

  cartitem:Productapi[] = [];

  private cartitemcount = new BehaviorSubject<number>(0);

  realcartcount = this.cartitemcount.asObservable();

  constructor() { }

  addtocart1(product:Productapi){

    this.cartitem.push(product);
    this.cartitemcount.next(this.cartitem.length);

  }

  getcartitem1():Productapi[]
  {
  
    return this.cartitem;
  }


  removeitem1(id: number)
  {
   const index=this.cartitem.findIndex((item=>item.id===id));
   this.cartitem.splice(index,1);
  
   this.cartitemcount.next(this.cartitem.length);
  }


}
