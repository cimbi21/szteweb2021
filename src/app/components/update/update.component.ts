import {Component, OnDestroy, OnInit} from '@angular/core';
import Payment from "../../models/payment.model";
import {PaymentService} from "../../services/payment.service";
import {ActivatedRoute} from "@angular/router";

interface Options {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit, OnDestroy{
  stats: Options[] = [
    {value: 'Elfogadott', viewValue: 'Elfogadott'},
    {value: 'Elutasított', viewValue: 'Elutasított'},
    {value: 'Ismeretlen', viewValue: 'Ismeretlen'}
  ];

  fizetesiMod: Options[] = [
    {value: 'Bankkártya', viewValue: 'Bankkártya'},
    {value: 'Hitelkártya', viewValue: 'Hitelkártya'},
    {value: 'Készpénz', viewValue: 'Készpénz'},
    {value: 'Kriptovaluta', viewValue: 'Kriptovaluta'}

  ]

  siker: boolean = false;
  id: string | null = null;
  totalAmount: string | null= null;
  paymentMethod: string | null= null;
  description: string | null= null;
  status: string | null= null;
  p: Payment=new Payment(this.id, this.status, this.description, this.paymentMethod, parseInt(typeof this.totalAmount === "string" ? this.totalAmount : "0"));
  constructor(private service: PaymentService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.siker=false;
    this.id=this.route.snapshot.paramMap.get('id');
    this.status=this.route.snapshot.paramMap.get('status');
    this.description=this.route.snapshot.paramMap.get('description');
    this.totalAmount=this.route.snapshot.paramMap.get('totalAmount');
    this.paymentMethod=this.route.snapshot.paramMap.get('paymentMethod');
    this.p=new Payment(this.id, this.status, this.description, this.paymentMethod, parseInt(typeof this.totalAmount === "string" ? this.totalAmount : "0"));
  }
  ngOnDestroy(): void {
    this.p=new Payment(null,null,null, null, null);
  }
  update(): void{
    if (this.p.id != null) {
      this.service.update(this.p.id, this.p).then(r => {this.siker=true;});
    }
  }
}


