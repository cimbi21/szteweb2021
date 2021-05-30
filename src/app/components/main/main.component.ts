import {Component, OnChanges, OnInit} from '@angular/core';
import Payment from "../../models/payment.model";
import {PaymentService} from "../../services/payment.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnChanges {
  b?: Payment[];
  s?: Payment[];
  smallest: Payment=new Payment(null, null,null,null, null);
  biggest: Payment = new Payment(null, null,null,null, null);
  constructor(private service: PaymentService) { }

  ngOnInit(): void {
      this.service.get().subscribe(val => {
      this.b=val;
      this.biggest=this.b[0];
    });
    this.service.getSmallest().subscribe(val => {
      this.s=val;
      this.smallest=this.s[0];
    });

  }
  ngOnChanges(): void {
    this.service.get().subscribe(val => {
      this.b=val;
      this.biggest=this.b[0];
    });
    this.service.getSmallest().subscribe(val => {
      this.s=val;
      this.smallest=this.s[0];
    });
  }

}
