import { Component, OnInit } from '@angular/core';
import { CardService } from '../../services/card.service'
import { Payments } from '../../modeles/payment'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  payments: Payments[] = []
  updtName: String = "Updated Name"
  updtNum: String = "1234123412341234"
  updtExDt: String = "4322"
  updtCVV: String = "123"

  constructor(private cardService: CardService) { }

  ngOnInit() {
    this.getPayments()
  }

  getPayments(){
    this.cardService.getPayments().subscribe((payments: Payments[]) => {
      this.payments = payments
    })
  }

  updatePayment(id){
    this.cardService.updatePayment(id, this.updtName,this.updtNum, this.updtExDt, this.updtCVV).subscribe(()=>{
      this.getPayments()
    })
  }

  deletePayment(id){
    this.cardService.deletePayment(id).subscribe(()=>{
      this.getPayments()
    })
  }

}
