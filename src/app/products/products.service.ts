export class ProductService {
  get(){
    return this.products;
  }

  add(product){
    this.products.push(product);
  }

  delete(product){
    let index = this.products.indexOf(product);
    index > 0 ? this.products.splice(index, 1) : false;
  }

  products = [
    {
      "title": 'USB Car Charguer',
      "description": 'My description in here.'
    },
    {
      "title": 'Second Product Car Charguer',
      "description": 'My description in here.'
    }
  ]
}
