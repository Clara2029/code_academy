import { Component } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  productsList = products;
  productCountRadioButton = 'All';
  productSearch = '';

  ngOnInit() {
    console.table(this.productsList);
  }

  getTotalCoursesNumber() {
    return products.length;
  }

  getTotalFreeCoursesNumber() {
    return products.filter(product => product.type == 'Free').length;
  }

  getTotalPremiumCoursesNumber() {
    return products.filter(product => product.type == 'Premium').length;
  }

  onFilterRadioButtonChanged(data: string) {
    this.productCountRadioButton = data;
  }

  onSearch(data: string) {
    this.productSearch = data;
  }
}
