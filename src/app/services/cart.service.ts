import { Injectable } from '@angular/core';
import {Product} from "../models/product.model";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: Product[] = [];

  addToCart(product: Product) {
    this.items.push(product);
  }

  removeFromCart(product: Product) {
    const index = this.items.indexOf(product);
    if (index >= 0) {
      this.items.splice(index, 1);
    }
  }

  getItems() {
    return this.items;
  }

  getItemsCount() {
    return this.items.length;
  }


}
