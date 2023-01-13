import { Component } from '@angular/core';
import { CartapiService } from 'src/app/service/service/service/cartapi.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  totalItemNumber :number = 0;
 constructor(private cartApi:CartapiService){ }
 ngOnInit(){
  this.cartApi.getProductData().subscribe(res=>{
    this.totalItemNumber = res.length;
  })
 }
}
