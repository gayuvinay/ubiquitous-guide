import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GET_PRODUCTS_LIST } from './url';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getProducts() {
   return  this.http.get(GET_PRODUCTS_LIST) as Observable<any>
  }

  getProductsByCategory(values:any) {
    const params = new HttpParams()
    .set('by_type',values)
    return this.http.get(GET_PRODUCTS_LIST,{params}) as Observable<any>
  }

  getProductsByState(values:any) {
    const params = new HttpParams()
    .set('by_state',values)
    return this.http.get(GET_PRODUCTS_LIST,{params}) as Observable<any>
  }
}
