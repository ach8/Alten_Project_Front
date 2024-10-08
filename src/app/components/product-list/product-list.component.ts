import {Component, OnInit} from '@angular/core';
import {Product} from "../../models/product.model";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent  {

  products: Product[] = [
    { id: 1, name: 'Bureau', price: 100, description: 'Bureau moderne avec espace de rangement intégré, design épuré et finition en bois clair ', imageUrl: 'assets/images/desk.jpg' },
    { id: 2, name: 'Smartphone', price: 500, description: 'Smartphone élégant avec écran Full HD, processeur rapide, double caméra et grande autonomie', imageUrl: 'assets/images/phone.jpg' },
    { id: 3, name: 'Television', price: 300, description: 'Téléviseur 24" Full HD LED avec HDMI et ports USB, 4K', imageUrl: 'assets/images/TV.jpg' },
    { id: 4, name: 'Camera', price: 600, description: 'Caméra numérique haute résolution avec objectif grand angle, enregistrement 4K', imageUrl: 'assets/images/camera.jpg' },
    { id: 5, name: 'Television', price: 300, description: 'Téléviseur 24" Full HD LED avec HDMI et ports USB, 4K', imageUrl: 'assets/images/TV.jpg' },
    { id: 6, name: 'Bureau', price: 100, description: 'Bureau moderne avec espace de rangement intégré, design épuré et finition en bois clair ', imageUrl: 'assets/images/desk.jpg' },
    { id: 7, name: 'Television', price: 300, description: 'Téléviseur 24" Full HD LED avec HDMI et ports USB, 4K', imageUrl: 'assets/images/TV.jpg' }
  ];

  // Variables pour la pagination
  p: number = 1; // Page actuelle
  itemsPerPage: number = 3; // Nombre d'articles par page

  constructor(private cartService: CartService) {}



  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }

}
