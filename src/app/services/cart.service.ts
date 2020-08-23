import {Injectable} from '@angular/core';
import {CartItem} from '../model/cart-item';
import {Subject} from 'rxjs';
import {Product} from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: CartItem[] = [];

  cartTotal: number;
  cartItemCount: number;

  totalPrice: Subject<number> = new Subject<number>();
  totalQuantity: Subject<number> = new Subject<number>();

  private baseUrl = 'http://localhost:8070/';


  constructor() {
  }

  addToCart(cartItem: CartItem) {
    // check if already have item in cart
    let alreadyExistInCart = false;
    let existingCartItem: CartItem;

    if (this.cartItems.length > 0) {
      // for (const tempCartItem of this.cartItems) {
      //   if (tempCartItem.itemID === cartItem.itemID) {
      //     existingCartItem = tempCartItem;
      //     break;
      //   }
      // }

      // returns first element that pass, otherwise return undefined.
      existingCartItem = this.cartItems.find(tempCartItem => tempCartItem.itemID === cartItem.itemID);

      alreadyExistInCart = (existingCartItem != undefined);
    }

    if (alreadyExistInCart) {
      // increment quantity
      existingCartItem.quantity++;
    } else {
      this.cartItems.push(cartItem);
    }

    // computer cart total

    this.computeCartTotal();

  }

  computeCartTotal() {
    let totalPriceValue = 0;
    let totalQuantityValue = 0;

    for (const currentCartItem of this.cartItems) {
      totalPriceValue += currentCartItem.quantity * currentCartItem.price;
      totalQuantityValue += currentCartItem.quantity;
    }

    this.totalPrice.next(totalPriceValue);
    this.totalQuantity.next(totalQuantityValue);
  }

  decrementQuantity(cartItem: CartItem) {
    cartItem.quantity--;

    if (cartItem.quantity === 0) {
      this.remove(cartItem);
    } else {
    }
    this.computeCartTotal();
  }

  remove(cartItem: CartItem) {
    const itemIndex = this.cartItems.findIndex(tempCartItem => tempCartItem.itemID === cartItem.itemID);

    if (itemIndex > -1) {
      this.cartItems.splice(itemIndex, 1);

      this.computeCartTotal();
    }
  }
}

interface GetResponse {

  items: CartItem[];
}
