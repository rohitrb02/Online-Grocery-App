import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../Models/category';
import { User } from '../Models/user';
import { LoginCredentials } from '../Models/login-credentials';
import { TokenResponse } from '../Models/token-response';
import { Product } from '../Models/product';
import { CartProduct } from '../Models/cart-product';
import { AppFeedback } from '../Models/app-feedback';
import { Order } from '../Models/order';
import { Bill } from '../Models/bill';

@Injectable({
  providedIn: 'root'
})
export class UserService  {
  tokenHeader = {'Authorization':'Bearer '+localStorage.getItem('token')};
  cartItem:CartProduct [] =[];
  subTotal:number = 0;
  constructor(private http:HttpClient) { }
  AddToCart(prod:Product,price:number){
    let cartProd = new CartProduct(prod.productId,1,price);
    this.cartItem.push(cartProd);
    console.log(this.cartItem);
  }
  RemoveFromCart(i:number){
    this.cartItem.splice(i,1);
    console.log(this.cartItem);
  }
  getAllCategory():Observable<Category[]>{
    return this.http.get<Category[]>("http://localhost:5276/api/Home/GetAllCategories");
  }
  
  signUpUser(user:User):Observable<string>{
    return this.http.post<string>("http://localhost:5276/api/User/SignUp",user,{headers:{'Accept':'application/json'}});
  }
  loginUser(credentials:LoginCredentials):Observable<TokenResponse>{
    return this.http.post<TokenResponse>("http://localhost:5276/api/User/UserLogin",credentials,{headers:{'Accept':'application/json'}});
  }
  GetUserId(email:string):Observable<number>{
    return this.http.get<number>("http://localhost:5276/api/User/GetUserId/"+email,{headers:{'Accept':'application/json'}});
  }
  getUserDetail(userId:any):Observable<User>{
    return this.http.get<User>("http://localhost:5276/api/User/GetUserbyId/"+userId,{headers:{'Accept':'application/json',...this.tokenHeader}});
  }
  getAllCategories():Observable<Category[]>{
    return this.http.get<Category[]>('http://localhost:5276/api/User/GetAllCategories',{headers:{'Accept':'application/json',...this.tokenHeader}});
  }
  getProductByCategory(categoryId:any):Observable<Product[]>{
    return this.http.get<Product[]>('http://localhost:5276/api/User/GetProductByCategory/'+categoryId,{headers:{'Accept':'application/json',...this.tokenHeader}});
  }
  editProfile(user:User){
    var id = user.userId;
    return this.http.put<User>("http://localhost:5276/api/User/EditProfile/"+id,user,{headers:{'Accept':'application/json',...this.tokenHeader}});
  }
  changePassword(user:User){
    var id = user.userId;
    return this.http.put<User>("http://localhost:5276/api/User/ChangePassword/"+id,user,{headers:{'Accept':'application/json',...this.tokenHeader}});
  }
  getAllProducts():Observable<Product[]>{
    return this.http.get<Product[]>("http://localhost:5276/api/User/GetAllProducts",{headers:{'Accept':'application/json',...this.tokenHeader}});
  }
  getProductById(id:any):Observable<Product>{
    return this.http.get<Product>("http://localhost:5276/api/User/GetProductById/"+id,{headers:{'Accept':'application/json',...this.tokenHeader}});
  }
  appFeedback(data:any){
    return this.http.post<any>("http://localhost:5276/api/User/AppFeedback",data,{headers:{'Accept':'application/json',...this.tokenHeader}});
  }
  placeOrder(data:any){
    return this.http.post<any>("http://localhost:5276/api/User/PlaceOrder",data,{headers:{'Accept':'application/json',...this.tokenHeader}});
  }
  getAllOrders(id:any):Observable<Order[]>{
    return this.http.get<Order[]>("http://localhost:5276/api/User/ProductHistory/"+id,{headers:{'Accept':'application/json',...this.tokenHeader}});
  }
  generateBill(data:any){
    return this.http.post<any>("http://localhost:5276/api/User/GenerateBill",data,{headers:{'Accept':'application/json',...this.tokenHeader}});
  }
  getBillByOrderId(id:any):Observable<Bill>{
    return this.http.get<Bill>("http://localhost:5276/api/User/GetBillByOrderId/"+id,{headers:{'Accept':'application/json',...this.tokenHeader}});
  }
  updateBillId(orderId:any,billId:number){
    return this.http.put<any>("http://localhost:5276/api/User/UpdateBillId/"+orderId,billId,{headers:{'Accept':'application/json',...this.tokenHeader}});
  }
  updateWallet(userid:any,change:any){
    return this.http.put<any>("http://localhost:5276/api/User/UpdateWallet/"+userid,change,{headers:{'Accept':'application/json',...this.tokenHeader}});
  }
  addQuery(data:any){
    return this.http.post<any>("http://localhost:5276/api/User/AddQuery",data,{headers:{'Accept':'application/json',...this.tokenHeader}});
  }
  getOrderByOrderId(id:any):Observable<Order>{
    return this.http.get<Order>("http://localhost:5276/api/User/GetorderByOrderId/"+id,{headers:{'Accept':'application/json',...this.tokenHeader}});
  }
  reviewProduct(review:any){
    return this.http.post<any>("http://localhost:5276/api/User/ProductFeedback",review,{headers:{'Accept':'application/json',...this.tokenHeader}});
  }
}
