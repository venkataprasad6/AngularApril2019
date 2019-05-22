import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CategoryproductService {

  constructor(private http: HttpClient) { }

  getRemoteCategorys(){
    return this.http.get("http://localhost:3000/categorys")
  }

  getRemoteProducts(){
    return this.http.get("http://localhost:4000/products")
  }

  getProductByCategoryId(categoryid){
    return this.http.get("http://localhost:4000/products?category="+categoryid)
  }
}
