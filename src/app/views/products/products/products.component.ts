import {Component} from '@angular/core';
import {ProductType} from "../../../../types/product.type";
import {ProductService} from "../../../shared/services/product.service";
import {CartService} from "../../../shared/services/cart.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {catchError, map, of, retry, tap} from "rxjs";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  public products: ProductType[] = [];
  public loading: boolean  = true;

  constructor(private productService: ProductService,
              private cartService: CartService,
              private router: Router,
              private http: HttpClient) {
  }

  ngOnInit() {
    // this.products = this.productService.getProducts();

    this.loading = true;
    this.productService.getProducts()
      .pipe(
        tap(() => {
          this.loading = false;
        })
      )
      .subscribe(
        {
          next: data => {
            this.products = data;
            console.log('next')
          },
          error: (error) => {
            this.router.navigate(['/']);
          }
        }
      )
  }

  // public addToCart(title: string): void {
  //   this.cartService.product-card = title;
  //   this.router.navigate(['/order'], {queryParams: {product-card: title}});
  // }
}
