import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs';
import {
  Categories,
  Category,
  Order,
  Payment,
  PaymentMethod,
  User,
} from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  baseurl = 'https://localhost:7149/api/Shopping/';
  apiUrl = "https://localhost:7244";
  constructor(private http: HttpClient) {}

  getCategoryList() {
    let url = this.baseurl + 'GetCategoryList';
    return this.http.get<any[]>(url).pipe(
      map((categories) =>
        categories.map((category) => {
          let mappedCategory: Category = {
            id: category.id,
            category: category.category,
            subCategory: category.subCategory,
          };
          return mappedCategory;
        })
      )
    );
  }

  //API HÒA begin
  getsCategoryList() {
    let url = this.apiUrl + '/api/Category/GetCategoryList';
    
    return this.http.get<any[]>(url).pipe(
      map((categories) =>
        categories.map((category) => {
          let mappedCategory: Categories = {
            idCategory: category.idCategory,
            title: category.title,
            subCategory: category.subCategory,
            titleEN: category.titleEN
          };
          return mappedCategory;
          
        })
      )
    );
  }
  
  getProductList(idCategory: number) {
    return this.http.get<any[]>(this.apiUrl + '/api/Product/getProductCategories', {
      params: new HttpParams()
        .set('idCategory', idCategory)
    });
  }
  
  getProductById(id: number) {
    let url = this.apiUrl + '/api/Product/GetProductById?id=' + id;
    console.log(url,"url");
    
    return this.http.get(url);
  }

  // getProductByIdCate(idCate: number) {
  //   let url = this.apiUrl + '/api/Product/GetProductByIdCate?idCate=' + idCate;
  //   console.log(url,"url");
    
  //   return this.http.get(url);
  // }

  getProductByIdCate(idCate: number) {
    return this.http.get<any[]>(this.apiUrl + '/api/Product/GetProductByIdCate', {
      params: new HttpParams()
        .set('idCate', idCate)
    });
  }

// end





  // getProducts(category: string, subcategory: string, count: number) {
  //   return this.http.get<any[]>(this.baseurl + 'GetProducts', {
  //     params: new HttpParams()
  //       .set('category', category)
  //       .set('subcategory', subcategory)
  //       .set('count', count),
  //   });
  // }


  getProduct(id: number) {
    let url = this.baseurl + 'GetProduct/' + id;
    return this.http.get(url);
  }

  registerUser(user: User) {
    let url = this.baseurl + 'RegisterUser';
    return this.http.post(url, user, { responseType: 'text' });
  }

  loginUser(email: string, password: string) {
    let url = this.baseurl + 'LoginUser';
    return this.http.post(
      url,
      { Email: email, Password: password },
      { responseType: 'text' }
    );
  }

  submitReview(userid: number, productid: number, review: string) {
    let obj: any = {
      User: {
        Id: userid,
      },
      Product: {
        Id: productid,
      },
      Value: review,
    };

    let url = this.baseurl + 'InsertReview';
    return this.http.post(url, obj, { responseType: 'text' });
  }

  getAllReviewsOfProduct(productId: number) {
    let url = this.baseurl + 'GetProductReviews/' + productId;
    return this.http.get(url);
  }

  addToCart(userid: number, productid: number) {
    let url = this.baseurl + 'InsertCartItem/' + userid + '/' + productid;
    return this.http.post(url, null, { responseType: 'text' });
  }

  getActiveCartOfUser(userid: number) {
    let url = this.baseurl + 'GetActiveCartOfUser/' + userid;
    return this.http.get(url);
  }

  getAllPreviousCarts(userid: number) {
    let url = this.baseurl + 'GetAllPreviousCartsOfUser/' + userid;
    return this.http.get(url);
  }

  getPaymentMethods() {
    let url = this.baseurl + 'GetPaymentMethods';
    return this.http.get<PaymentMethod[]>(url);
  }

  insertPayment(payment: Payment) {
    return this.http.post(this.baseurl + 'InsertPayment', payment, {
      responseType: 'text',
    });
  }

  insertOrder(order: Order) {
    return this.http.post(this.baseurl + 'InsertOrder', order);
  }
}
