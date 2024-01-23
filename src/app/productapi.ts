export interface Rating {
    rate: number;
    count: number;
  }
  
export interface Productapi {
id:number,
title:string,
price:string,
category:string,
description:string,
image:string,
rating: Rating;
quantity:1;
}
