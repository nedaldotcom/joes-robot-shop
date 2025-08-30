import {Component, inject} from '@angular/core';
import { IProduct } from "./product.model";
import {CurrencyPipe, NgClass, NgForOf, NgIf, NgStyle} from "@angular/common";
import {ProductDetailsComponent} from "../product-details/product-details.component";
import {CartService} from "../cart/cart.service";
import {ProductService} from "./product.service";
import {ActivatedRoute, Router, RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'bot-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
  imports: [
    NgForOf,
    ProductDetailsComponent,
    RouterLink,
    RouterLinkActive
  ],
  standalone: true
})
export class CatalogComponent {
  products: any;
  filter: string = '';
  // private cartService: CartService = inject(CartService);

  constructor(
    private cartService: CartService,
    private productService : ProductService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit(){
    this.productService.getProducts().subscribe(products =>{
      this.products = products;
    });
    this.route.queryParams.subscribe((params) =>{
      this.filter = params['filter'] ?? '';
    });
  }

  getFilteredProducts() {
    if (this.filter === '') {
      return this.products;
    }
    return this.products.filter((product : IProduct) =>
      product.category.toLowerCase() === this.filter.toLowerCase());
  }

  addToCart(product: IProduct) {
    this.cartService.add(product);
    this.router.navigate(['/cart']);
  }
}
