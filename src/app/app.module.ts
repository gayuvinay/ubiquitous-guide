import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { SortComponent } from './sort/sort.component';
import {  MatIconModule, } from '@angular/material/icon';
import {  MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
const routes: Routes = [
  { path: '', component: ProductsComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductsComponent,
    SortComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule,
    BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
