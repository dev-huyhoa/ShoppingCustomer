import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Subject, window } from 'rxjs';
import { Cart, Payment, Products, User } from '../models/models';
import { NavigationService } from './navigation.service';

@Injectable({
  providedIn: 'root',
})
export class UtilityService {
  changeCart = new Subject();

  constructor(
    private navigationService: NavigationService,
    private jwt: JwtHelperService
  ) {}

  applyDiscount(price: number, discount: number): number {
    let finalPrice: number = price - price * (discount / 100);
    return finalPrice;
  }

  // JWT Helper Service : npm install @auth0/angular-jwt

  getUser(): User {
    let token = this.jwt.decodeToken();
    let user: User = {
      
      id: token.id,
      lastName: token.lastName,
      firstName: token.firstName,
      address: token.address,
      mobile: token.mobile,
      email: token.email,
      password: token.password,
      createdAt: token.createdAt,
      modifiedAt: token.modifiedAt,
    };

    return user;
  }

  setUser(token: string) {
    localStorage.setItem('user', token);
  }

  isLoggedIn() {
    return localStorage.getItem('user') ? true : false;
  }

  logoutUser() {
    localStorage.removeItem('user');
  }
  // Hòa
  addToCart(product: Products) {
    let productid = product.id;
    let userid = this.getUser().id;    
    this.navigationService.addToCarts(userid, productid).subscribe((res) => {
      if (res.toString() === 'inserted') {
        this.changeCart.next(1)
      }
    });
  }

  calculatePayment(cart: Cart, payment: Payment) {    
    payment.totalAmount = 0;
    payment.amountPaid = 0;
    payment.amountReduced = 0;

    for (let cartitem of cart.cartItems) {
      payment.totalAmount += cartitem.product.price;

      payment.amountReduced +=
        cartitem.product.price -
        this.applyDiscount(
          cartitem.product.price,
          cartitem.product.discount
        );

      payment.amountPaid += this.applyDiscount(
        cartitem.product.price,
        cartitem.product.discount
      );
    }

    // if (payment.amountPaid > 50000) payment.shipingCharges = 2000;
    // else if (payment.amountPaid > 20000) payment.shipingCharges = 1000;
    // else if (payment.amountPaid > 5000) payment.shipingCharges = 500;
    // else payment.shipingCharges = 2000;
    payment.shipingCharges = 20000;

  }

  calculatePricePaid(cart: Cart) {
    let pricepaid = 0;
    for (let cartitem of cart.cartItems) {
      pricepaid += this.applyDiscount(
        cartitem.product.price,
        cartitem.product.discount
      );
    }
    return pricepaid;
  }

  orderTheCart() {
    
  }

  formatPrice(price: number): string {
    return price.toLocaleString('en-US');
  }
}
