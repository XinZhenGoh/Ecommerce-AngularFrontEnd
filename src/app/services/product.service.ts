import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../model/product';
// reactive javascript
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:8080/products';

  constructor(private httpClient: HttpClient) {
  }

  // getProductList(categoryId: number): Observable<Product[]> {
  //   const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${categoryId}`;
  //   return this.getProducts(searchUrl);
  // }

  getProductList(categoryName: string): Observable<Product[]> {
    const searchUrl = `${this.baseUrl}/category/${categoryName}`;
    return this.getProductsCategory(searchUrl);
  }

  searchProducts(keyword: string): Observable<Product[]> {
    const searchUrl = `${this.baseUrl}/search/${keyword}`;
    return this.getProductsKeyword(searchUrl);
  }


  // private getProducts(searchUrl: string) {
  //   return this.httpClient.get<GetResponse>(searchUrl).pipe(
  //     map(response => response.)
  //   );
  // }

  private getProductsCategory(searchUrl: string) {
    return this.httpClient.get(searchUrl).pipe(
      map((products: Product[]) => {
        return products;
      })
    );
  }

  private getProductsKeyword(searchUrl: string) {
    return this.httpClient.get<GetResponse>(searchUrl).pipe(
      map(response => response.content)
    );
  }

}

interface GetResponse {

  content: Product[];
}
