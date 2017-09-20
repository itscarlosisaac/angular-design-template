import { Component, OnInit } from '@angular/core'
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations'
import { ProductService } from './products.service'
import { Validators, FormBuilder } from '@angular/forms'


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
  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder
  ){};
  products;
  form;

  ngOnInit(){
    this.products = this.productService.get();
    this.products.forEach(element => {
      this.productService.save(element);
    });
    this.form = this.formBuilder.group({
      title: this.formBuilder.control('', Validators.required),
      description: this.formBuilder.control('', Validators.required)
    });
  }

  title:string = '';
  description:string = '';
  state = 'active';

  addProduct(value:any){
    this.products.push({'title': value.title, 'description':value.description });
    this.productService.save(value);
    this.title = '';
    this.description = '';
  }

  removeProduct(product){
    this.productService.delete(product);
    this.products.splice(product, 1);
  }
}
