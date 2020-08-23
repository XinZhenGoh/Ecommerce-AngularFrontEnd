import {Product} from './product';

export class CartItem {

  itemID: number;
  itemName: string;
  imageUrl: string;
  price: number;
  quantity: number;

  constructor(product: Product) {
    this.itemID = product.itemID;
    this.itemName = product.itemName;
    this.imageUrl = product.imageUrl;
    this.price = product.price;
    this.quantity = 1;
  }
}
