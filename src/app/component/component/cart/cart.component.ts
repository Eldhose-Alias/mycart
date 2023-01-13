import { Component } from '@angular/core';
import { CartapiService } from 'src/app/service/service/service/cartapi.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  product:any =[];
  allProducts:any = 0;
 constructor(private cartApi : CartapiService){}

 ngOnInit(){
  this.cartApi.getProductData().subscribe(res =>{
    this.product = res;
    this.allProducts = this.cartApi.getTotalAmount();
  })
 }
 removeProduct(item:any){
  this.cartApi.removeCartData(item);
 }
 reomoveAllProduct(){
  this.cartApi.removeAllCart();
 }
 payment(){
  alert(`Your Payment done Successfully`)
 }
}
