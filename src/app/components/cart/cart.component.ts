import {Component, OnInit} from '@angular/core';
import {Product} from "../../models/product.model";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items: Product[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }

  removeFromCart(product: Product) {
    this.cartService.removeFromCart(product);
    this.items = this.cartService.getItems();
  }

  totalprice():number {
    let total=0;
    for (let i=0;i<this.items.length;i++){
      total+=this.items[i].price;}
    return total;
  }

}
