export default class Payment{
  constructor(id: string | null, status: string | null, description: string | null , paymentMethod: string | null , totalAmount: string | null ) {
    this.id=id;
    this.status=status;
    this.paymentMethod=paymentMethod;
    this.description=description;
    this.totalAmount=totalAmount;
  }

  id?:string | null;
  status?:string | null;
  totalAmount?:string | null;
  paymentMethod?:string | null;
  description?:string | null;

}
