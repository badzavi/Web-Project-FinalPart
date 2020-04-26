import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from "rxjs";
import { catchError, map, tap, filter } from 'rxjs/operators';

import { Category } from "./categories/category";
import { Product } from "./products/product";
import { Comment } from "./interfaces/comment";
// import { CATEGORIES } from "./categories/category-detail/mock-categories";
// import { ALL_PRODUCTS } from "./products/mock-products";
import { CART_PRODUCTS } from "./cart/cart-products";
import { LoginResponse } from './user';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  products:Product[];
  categories:Category[];
  cartProducts:Product[] = CART_PRODUCTS;
  private BASE_URL = 'http://localhost:8000'
  private categoriesUrl = 'http://localhost:8000/api/categories';
  private productsUrl = 'http://localhost:8000/api/products';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
  ) { }

  // CATEGORY FUNCTIONS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.categoriesUrl)
      .pipe(
        catchError(this.handleError<Category[]>('getCategories', []))
      );
  }

  getCategoryById(categoryId: number): Observable<Category> {
    const url =  `${this.categoriesUrl}/${categoryId}`
    return this.http.get<Category>(url).pipe(
      catchError(this.handleError<Category>(`getCategoryById id=${categoryId}`))
    );
  }

  // PRODUCT FUNCTIONS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl)
      .pipe(
        catchError(this.handleError<Product[]>('getProducts', []))
      );
  }

  getProductById(productId: number): Observable<Product> {
    const url = `${this.productsUrl}/${productId}`;
    return this.http.get<Product>(url).pipe(
      catchError(this.handleError<Product>(`getProductById id=${productId}`))
    );
  }


  getProductsByCategoryId(categoryId: number): Observable<Category> {
    const url =  `${this.categoriesUrl}/${categoryId}` // api/categories/2
    return this.http.get<Category>(url).pipe(
      catchError(this.handleError<Category>(`getProductsByCategoryId id=${categoryId}`))
    );
  }

  getProductsByCategoryIdFromAllProducts(categoryId: number): Observable<Product[]> {
    const tempProducts = this.http.get<Product[]>(this.productsUrl)
      .pipe(
        map(products => products.filter(p => p.categoryId === categoryId)),
        catchError(this.handleError<Product[]>('getProducts', []))
      );
    return tempProducts;
  }

  deleteProduct (product: Product | number): Observable<Product> {
    const id = typeof product === 'number' ? product : product.id;
    const url = `${this.productsUrl}/${id}`;

    return this.http.delete<Product>(url, this.httpOptions).pipe(
      catchError(this.handleError<Product>('deleteProduct'))
    );
  }

  updateProduct (product: Product): Observable<Product> {
    const url =  `${this.productsUrl}/${product.id}`
    return this.http.put(url, product, this.httpOptions).pipe(
      catchError(this.handleError<any>('updateProduct'))
    );
  }
  // CART PRODUCTS FUNCTIONS++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  
  getCartProducts() {
    return of(this.cartProducts);
  }

  deleteCartProduct(id: number) {
    this.cartProducts = this.cartProducts.filter(product => product.id !== id);
    return of(this.cartProducts);
  }

  addCartProduct(product:Product) {
    return of(this.cartProducts.push(product));
  }


  // COMMENT FUNCTIONS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  deleteComment (comment: Comment | number): Observable<Comment> {
    const id = typeof comment === 'number' ? comment : comment.id;
    const url = `${this.BASE_URL}/api/comments/${id}`;

    return this.http.delete<Comment>(url, this.httpOptions).pipe(
      catchError(this.handleError<Comment>('deleteComment'))
    );
  }

  updateComment (comment: Comment): Observable<Comment> {
    const url =  `${this.BASE_URL}/api/comments/${comment.id}`
    return this.http.put(url, comment, this.httpOptions).pipe(
      catchError(this.handleError<any>('updateComment'))
    );
  }
  addComment (comment:any): Observable<Comment> {
    const url =  `${this.BASE_URL}/api/users/comments`
    return this.http.post(url, comment, this.httpOptions).pipe(
      catchError(this.handleError<any>('updateComment'))
    );
  }

  // HANDLE ERROR++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }

}
