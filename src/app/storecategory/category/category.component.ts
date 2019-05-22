import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router'
import { CategoryproductService } from 'src/app/services/categoryproduct.service';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categorys:any=[]
  products:any=[]
  //cacheproducts:any=[]
  categorysTitle='--All--'
  productsTitle='--All--'

  constructor(private catprodremote: CategoryproductService,private router:Router) { }

  ngOnInit() {
this.getAllCategorys();
this.getALLProducts();
  }
  getAllCategorys=function(){
    this.catprodremote.getRemoteCategorys().subscribe((data)=>{      
      this.categorys=data;
      console.log("remote data assigned to categorys")
      console.log(this.categorys)
    })
  }

  getALLProducts=function(){
    this.catprodremote.getRemoteProducts().subscribe((data)=>{
this.products=data;
//this.cacheproducts=data;
console.log("remote data assigned to products")
console.log(this.products);
    })
  }

  getALLProductsByCategoryID=function(categoryid){
    console.log("category change event fired");
    console.log(categoryid);
    this.catprodremote.getProductByCategoryId(categoryid).subscribe((data)=>{      
      console.log(data);
      this.products=data;
      
          })
  }

  
//   filterProducts(categoryvalue: any) {
//     if (categoryvalue == "0")
//     {
//         this.products = this.cacheproducts;
//         console.log(this.products);
//     }
//     else
//     {
//       console.log(this.products);
//       console.log(categoryvalue);
//     this.products = this.cacheproducts.filter((item) => item.category == categoryvalue);
//     console.log(this.products);
//     }
// }

  

  
}
