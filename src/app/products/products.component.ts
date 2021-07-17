import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products:any;
  @ViewChild('submitMsg', { static: true })
  errorPopupRef!: TemplateRef<any>;
  sort: any;
  constructor(private httpService: HttpClient, private _dialog: MatDialog,) { }
  ngOnInit(): void {
    this.httpService.get('./assets/products.json').subscribe(
      data => {
       this.products = data as Observable<any>
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }

  

  onsubmit(id:any) {
   //@ts-ignore
    this.errorPopupRef = this._dialog.open(this.errorPopupRef, {
      width: '800px',
      hasBackdrop: false,
      maxHeight: '95vh'
    })
    //@ts-ignore
    const val = this.products.find((o) => o.p_id === id) 
    this.products = [val]
  }


  applySort(event:any) {
    //@ts-ignore
    if(event!=="show") {
      //@ts-ignore
      const val = this.products.find((o) => o.p_id === event) 
      this.products = [val]
    }
   if(event ==="show") {
      this.products = this.products
    }
 
}

closeAllError() {
  this._dialog.closeAll();
}
  }


