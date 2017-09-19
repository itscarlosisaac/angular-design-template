export class ProductService {

  storage = localStorage;

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

  get(){
    if ( this.storage.length !== 0 ){
      this.products = [];
      let temp;
      for( let i = 0; i < this.storage.length; i++ ){
        let title = this.storage.key(i);
        let r = JSON.parse(this.storage.getItem(title));
        this.products.push(r);
      }
      return this.products
    }
    return this.products;
  }

  add(product){
    this.products.push(product);
    this.save(product);
  }

  delete(product){
    this.removeFromLocal(product);
    let index = this.products.indexOf(product);
    index > 0 ? this.products.splice(index, 1) : false;
  }

  removeFromLocal(product){
    this.storage.removeItem(this.products[product].title);
  }

  save(product){
    this.storage.setItem(product.title, JSON.stringify(product) )
  }

}
