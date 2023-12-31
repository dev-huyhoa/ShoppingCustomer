import { Component, OnInit } from '@angular/core';
import { SuggestedProduct, SuggestedProducts } from '../models/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  suggestedProducts: SuggestedProduct[] = [
    {
      banerimage: 'https://file.hstatic.net/200000642007/file/mlbvietnam_ess_banner_fixed_1920x640_c06cdbf670fa4fbc8e04aebe81385661.jpg',
      category: {
        id: 0,
        category: 'electronics',
        subCategory: 'mobiles',
      },
    },
    {
      banerimage: 'https://res.cloudinary.com/ddv2idi9d/image/upload/v1703683427/1920x640_5bf1f9145d1248daadf8e44b3dd4c7a2_zv1uto.webp',
      category: {
        id: 1,
        category: 'electronics',
        subCategory: 'laptops',
      },
    },
    {
      banerimage: 'https://res.cloudinary.com/ddv2idi9d/image/upload/v1703683350/mlb_eoss_1922_d019f37e61834b68add28f8fa51ece98_gbv57d.webp',
      category: {
        id: 1,
        category: 'furniture',
        subCategory: 'chairs',
      },
    },
    // {
    //   banerimage: 'https://res.cloudinary.com/ddv2idi9d/image/upload/v1703683350/mlb_eoss_1922_d019f37e61834b68add28f8fa51ece98_gbv57d.webp',
    //   category: {
    //     id: 1,
    //     category: 'furniture',
    //     subCategory: 'chairs',
    //   },
    // },
  ];

  // hòa làm
  suggestedProduct: SuggestedProducts[] = [
    {
      banerimage: 'https://file.hstatic.net/200000642007/file/mlbvietnam_ess_banner_fixed_1920x640_c06cdbf670fa4fbc8e04aebe81385661.jpg',
      category: {
        idCategory: 1,
        title: 'Quần Áo',
        subCategory: 'Quần Áo',
        titleEN: 'QuanAo'
      },
    },
    {
      banerimage: 'https://res.cloudinary.com/ddv2idi9d/image/upload/v1703683350/mlb_eoss_1922_d019f37e61834b68add28f8fa51ece98_gbv57d.webp',
      category: {
        idCategory: 2,
        title: 'Giày Dép',
        subCategory: 'Giày Dép',
        titleEN: 'GiayDep'
      },
    },
    {
      banerimage: 'https://res.cloudinary.com/ddv2idi9d/image/upload/v1703683427/1920x640_5bf1f9145d1248daadf8e44b3dd4c7a2_zv1uto.webp',
      category: {
        idCategory: 3,
        title: 'Túi Ví',
        subCategory: 'Túi Ví',
        titleEN: 'TuiVi'
      },
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
