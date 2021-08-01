import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  constructor(private productService: ProductService) { }
 products:any;
  ngOnInit() {
    //@ts-ignore
    this.productService.getProducts()._subscribe(({body}) =>{
      this.products = body
      console.log(this.products);
      
    })
    
  }

  applySort(event:any) {
    this.products = undefined
    //@ts-ignore
    this.productService.getProductsByCategory(event)._subscribe(({body}) =>{
  this.products = body
      
    })
  }
  sortByState(event:any) {
    this.products = undefined
    //@ts-ignore
    this.productService.getProductsByState(event)._subscribe(({body}) =>{
  this.products = body
  })
  }
}
