import {Component, OnInit} from '@angular/core';
import Payment from "../../models/payment.model";
import {PaymentService} from "../../services/payment.service";
import {map} from "rxjs/operators";
import {Router} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
  payments?: Payment[];
  biggest?: Payment[];
  constructor(private service: PaymentService, private router: Router ) { }

  ngOnInit(): void {
    this.betolt();

  }

  betolt(): void {
    this.service.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.payments = data;
    });
  }

  update(param: Payment | undefined):void {
    this.router.navigate(['update', { id: param?.id, status: param?.status, paymentMethod: param?.paymentMethod, totalAmount: param?.totalAmount, description: param?.description}]);
  }
}
