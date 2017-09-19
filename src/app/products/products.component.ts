import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { ProductService } from './products.service'


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  animations:[
    trigger('productsAnim', [
      state('active', style({
        opacity: '1'
      })),
      transition('void => *', [
        style({ transform: 'translateX(-30px)', opacity: '0'}),
        animate('700ms ease-in-out')
      ]),
      transition('* => void', [
        animate('300ms ease-in-out', style({ transform: 'translateX(-30px)', opacity: '0'}))
      ])
    ])
  ]
})
export class ProductsComponent {
  products = new ProductService().products;

  title:string = '';
  description:string = '';
  state = 'active';

  addProduct(value:any){
    this.products.push({'title': value.title, 'description':value.description });
    this.title = '';
    this.description = '';
  }

  removeProduct(product){
    this.products.splice(product, 1);
  }
}
