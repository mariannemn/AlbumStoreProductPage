import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Album } from './album';
import { Observable } from 'rxjs/internal/Observable';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _albumUrl = '../assets/album.json';
  private _productsUrl = '../assets/products.json';

  constructor(private _http: HttpClient) { }

  getAlbum(_id: number): Observable<Album> {
    return this._http.get(this._albumUrl).pipe(map(response =>
       <Album>response));
  }

  getProducts(): Observable<Product[]> {
    return this._http.get(this._productsUrl).pipe(map(response =>
      <Product[]>response))
  }
}
