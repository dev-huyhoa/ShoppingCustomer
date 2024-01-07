import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from '../models/models';
import { NavigationService } from '../services/navigation.service';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  view: 'grid' | 'list' = 'list';
  sortby: 'default' | 'htl' | 'lth' = 'default';
  // products: Product[] = [];
  product: Products [] = []
  

  constructor(
    private activatedRoute: ActivatedRoute,
    private navigationService: NavigationService,
    private utilityService: UtilityService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params: any) => {
      let idCategory = params.idCategory;
      let subcategory = params.idCategory;
      
      if (idCategory)
        this.navigationService
          .getProductByIdCate(idCategory)
          .subscribe((res: any) => {
            this.product = res;            
          });
    });
  }

  sortByPrice(sortKey: string) {
    this.product.sort((a, b) => {
      if (sortKey === 'default') {
        return a.id > b.id ? 1 : -1;
      }
      return (
        (sortKey === 'htl' ? 1 : -1) *
        (this.utilityService.applyDiscount(a.price, a.discount) >
        this.utilityService.applyDiscount(b.price, b.discount)
          ? -1
          : 1)
      );
    });
  }
}
