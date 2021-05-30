import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import Payment from 'src/app/models/payment.model';
import {PaymentService} from "../../services/payment.service";

interface Options {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})


export class AddComponent implements OnInit, OnChanges {


  status: Options[] = [
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

  p: Payment = new Payment(null, null, null, null, null);

  kuldes: boolean = false;

  constructor(private service: PaymentService) { }


  mentes(): void{
    this.service.create(this.p).then(() => {
      this.kuldes = true;
    });
  }

  new(): void{
    this.kuldes = false;
    this.p = new Payment(null, null, null, null, null);
  }

  ngOnInit(): void {
    this.new();
  }
  ngOnChanges(changes: SimpleChanges) {
    this.new();
  }
}
