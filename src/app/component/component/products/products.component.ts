import { Component } from '@angular/core';
import { ApiService } from 'src/app/service/service/api.service';
import { CartapiService } from 'src/app/service/service/service/cartapi.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  productList:any
  constructor (private api:ApiService ,private cartApi:CartapiService){}
      
ngOnInit(){
 this.api.getProduct().subscribe(res=>{
  this.productList = res;
  this.productList.forEach((a:any) => {
    Object.assign(a,{quantity:1 , total:a.price})
  });
 })
}
addtocart(item:any){
  this.cartApi.addToCArt(item);
}
}
