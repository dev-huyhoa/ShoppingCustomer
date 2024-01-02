import { Directive, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Categories, Category } from '../models/models';

@Directive({
  selector: '[OpenProducts]',
})
export class OpenProductsDirective {
  // @Input() category: Category = {
  //   id: 0,
  //   category: '',
  //   subCategory: '',
  // };

  @Input() cate: Categories = {
    idCategory: 0,
    title: '',
    subCategory: '',
    titleEN: '',
  };

  // @HostListener('click') openProducts() {
  //   this.router.navigate(['/products'], {
  //     queryParams: {
  //       category: this.category.category,
  //       subcategory: this.category.subCategory,
        
  //     },
  //   });
  // }

  @HostListener('click') openProducts() {
    this.router.navigate(['/products'], {
      queryParams: {
        // title: this.cate.title,
        // titleEN: this.cate.titleEN,
        idCategory: this.cate.idCategory,
        // subCategory: this.cate.subCategory
      },
    });
  }


  //
  constructor(private router: Router) {}
}
