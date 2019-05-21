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
  

  constructor(private catprodremote: CategoryproductService,private router:Router) { }

  ngOnInit() {
this.getAllCategorys();
this.getRemoteProducts();
  }
  getAllCategorys=function(){
    this.catprodremote.getRemoteCategorys().subscribe((data)=>{      
      this.categorys=data;
      console.log("remote data assigned to categorys")
      console.log(this.categorys)
    })
  }

  getRemoteProducts=function(){
    this.catprodremote.getRemoteProducts().subscribe((data)=>{
this.products=data;
console.log("remote data assigned to products")
console.log(this.products);
    })
  }

  
}
