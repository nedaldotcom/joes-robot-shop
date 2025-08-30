import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IProduct} from "../catalog/product.model";
import {CurrencyPipe, NgClass, NgIf, NgStyle} from "@angular/common";

@Component({
  selector: 'bot-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  imports: [
    NgStyle,
    NgClass,
    CurrencyPipe,
    NgIf
  ],
  standalone: true
})
export class ProductDetailsComponent {
  @Input() product!: IProduct; // This component expects a product to be passed in as an input from a parent component.
  @Output() buy = new EventEmitter(); // This component emits an event when the user clicks the "Buy" button.

  getImageUrl(product: IProduct) {
    return `assets/images/robot-parts/${product.imageName}`;
  }


  getDiscountedProducts(product : IProduct): string[] {
    if (product.discount > 0) return ['strikethrough'];
    return [];
  }

  buyButtonClicked(product: IProduct) {
    this.buy.emit();
  }
}
