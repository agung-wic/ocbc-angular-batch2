import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[]=[];
  
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(){
    this.productService
        .getProducts()
        .subscribe(products => this.products = products);
  }



  // products = [
  //   {
  //     id: "ABCB441189035",
  //     name: "T-shirt",
  //     description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  //   },
  //   {
  //     id: "DEF651043347",
  //     name: "Shoes",
  //     description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  //   },
  //   {
  //     id: "GHI0831819467",
  //     name: "T-shirt",
  //     description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  //   }
  // ]

}
