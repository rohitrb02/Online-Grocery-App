import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { combineLatest } from 'rxjs';
import { Order } from 'src/app/Models/order';
import { Product } from 'src/app/Models/product';

import { UserService } from 'src/app/Services/user.service';




@Component({
  selector: 'previous-order',
  templateUrl: './previous-order.component.html',
  styleUrls: ['./previous-order.component.css']
})
export class PreviousOrderComponent implements OnInit {
  closeResult: string = "";

  orderHistory: Order[] = [];
  product: Product[] = [];

  allData: any[] = [];
  constructor(private userService: UserService, private modalService: NgbModal) { }
  ngOnInit(): void {
    this.userService.getAllOrders(localStorage.getItem('userId')).subscribe(data => {
      this.orderHistory = data;

      console.log(this.orderHistory);


      // for (const it of this.orderHistory) {
      //   let allproduct = it.productList.split(" ");

      //   for (const it2 of allproduct) {

      //     this.userService.getProductById(Number(it2)).subscribe(data => {

      //       this.product.push(data);
      //     });

      //   }
      // }
     // console.log(this.product)

    })
  }

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
