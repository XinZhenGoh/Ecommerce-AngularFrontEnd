import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {Product} from '../../model/product';
import {ActivatedRoute} from '@angular/router';
import {CartItem} from '../../model/cart-item';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[];
  currentCategoryName: string;
  searchMode: boolean;

  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private cartService: CartService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.listProducts();
    });
  }

  listProducts() {

    this.searchMode = this.route.snapshot.paramMap.has('keyword');

    if (this.searchMode) {
      this.handleSearchProducts();
    } else {
      this.handleListProducts();
    }
  }

  handleListProducts() {
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('name');

    if (hasCategoryId) {
      this.currentCategoryName = this.route.snapshot.paramMap.get('name');
      console.log('works' + this.currentCategoryName);
    } else {
      this.currentCategoryName = 'general';
    }

    this.productService.getProductList(this.currentCategoryName).subscribe(
      data => {
        this.products = data;
      }
    );
  }

  handleSearchProducts() {
    const keyword: string = this.route.snapshot.paramMap.get('keyword');

    console.log('called');

    if (keyword) {
      this.productService.searchProducts(keyword).subscribe(
        data => {
          this.products = data;
        }
      );
    } else {
      this.productService.getProductList('electronics').subscribe(
        data => {
          this.products = data;
        }
      );
    }
  }

  addToCart(product: Product) {
    console.log(product.itemName);

    const cartItem = new CartItem(product);

    this.cartService.addToCart(cartItem);

  }
}
