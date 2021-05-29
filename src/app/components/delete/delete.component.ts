import {Component, Input, OnInit} from '@angular/core';
import Payment from "../../models/payment.model";
import {PaymentService} from "../../services/payment.service";
import {switchMap} from "rxjs/operators";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  @Input() payment?: Payment;
  constructor(private service: PaymentService) { }

  ngOnInit(): void {
  }

  delete() {
    this.service.delete(this.payment?.id);
  }
}


