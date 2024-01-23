import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Productapi } from './productapi';
import { Observable } from 'rxjs';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products!: Productapi[];
  cartitem: Productapi[] = [];

  /*static sortProductsAlphabetically: any;*/

  constructor(private http: HttpClient) { }
  private apiUrl = 'https://fakestoreapi.com/products'

  getProducts(): Observable<Productapi[]> {
    return this.http.get<Productapi[]>(this.apiUrl);
  }

  searchProducts(query: string): Observable<Productapi[]> {
    const url = `${this.apiUrl}?q=${query}`;
    return this.http.get<Productapi[]>(url);
  }

  getItems(limit: number): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(items => items.slice(0, limit))
    );
  }


  getProductsByCategory(category: string): Observable<Productapi[]> {
    return this.http.get<Productapi[]>(this.apiUrl).pipe(
      map((products: Productapi[]) => {
        return products.filter((product: Productapi) => product.category === category);
      })
    );
  }



  getProductDetails(id: number): Observable<Productapi> {
    return this.http.get<Productapi>('https://fakestoreapi.com/products/' + id.toString());
  }

  getalphabetProducts(): Observable<Productapi[]> {
    return this.http.get<Productapi[]>(this.apiUrl).pipe(
      map((products: Productapi[]) => {
        return products.sort((a, b) => {
          return a.title.localeCompare(b.title); // Sort products alphabetically by name
        });
      })
    );
  }


}

