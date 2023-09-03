import { Injectable } from '@angular/core';
import {ProductType} from "../../../types/product.type";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // private products: ProductType[] = [
  //   {
  //     id: 1,
  //     image: 'pr1.png',
  //     title: 'Мясная Делюкс',
  //     description: 'Пепперони, лук, бекон, томатная паста, колбаски, перец, грибы, соус чили, ананасы',
  //     datetime: '2022-03-17 15:00:00'
  //   },
  //   {
  //     id: 2,
  //     image: '',
  //     title: 'Морская Премиум',
  //     description: 'Перец, сыр, креветки, кальмары, мидии, лосось',
  //     datetime: '2022-04-31 15:00:00'
  //   },
  //   {
  //     id: 3,
  //     image: 'pr3.png',
  //     title: 'Бекон и Сосиски',
  //     description: 'Бекон, сыр, сосиски, ананас, томатная паста',
  //     datetime: '2022-08-30 15:00:00'
  //   },
  //   {
  //     id: 4,
  //     image: 'pr4.png',
  //     title: 'Куриная Делюкс',
  //     description: 'Курица, ананас, сыр Пепперони, соус для пиццы, томатная паста',
  //     datetime: '2022-02-23 15:00:00'
  //   },
  //   {
  //     id: 5,
  //     image: 'pr5.png',
  //     title: 'Барбекю Премиум',
  //     description: 'Свинина BBQ, соус Барбкею, сыр, курица, соус для пиццы, соус чили',
  //     datetime: '2021-12-31 15:00:00'
  //   },
  //   {
  //     id: 6,
  //     image: 'pr6.png',
  //     title: 'Пепперони Дабл',
  //     description: 'Пепперони, сыр, колбаса 2 видов: обжаренная и вареная',
  //     datetime: '2022-12-14 15:00:00'
  //   },
  //   {
  //     id: 7,
  //     image: 'pr7.png',
  //     title: 'Куриное трио',
  //     description: 'Жареная курица, Тушеная курица, Куриные наггетсы, перец, сыр, грибы, соус для пиццы',
  //     datetime: '2022-06-31 15:00:00'
  //   },
  //   {
  //     id: 8,
  //     image: 'pr8.png',
  //     title: 'Сырная',
  //     description: 'Сыр Джюгас, Сыр с плесенью, Сыр Моцарелла, Сыр секретный',
  //     datetime: `2022-12-31 21:00:00`
  //   },
  // ]



  constructor(private http: HttpClient) { }

  private products: ProductType[] = [];

  getProducts(): Observable<ProductType[]> {
    return this.http.get<ProductType[]>('https://testologia.site/pizzas');
  }

  getProduct(id: number): Observable<ProductType> {
    return this.http.get<ProductType>(`https://testologia.site/pizzas?id=${id}`);
  }

  createOrder(data: { product: string, address: string, phone: string }) {
    return this.http.post< {success: boolean, message?: string} >(`https://testologia.site/order-pizza`, data);
  }
}
