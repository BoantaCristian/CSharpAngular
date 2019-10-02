import { Component, OnInit } from '@angular/core';
import { CardService } from '../../services/card.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {


  newName: String = ''
  newNumber: String = ''
  newExpDate: String = ''
  newCVV: String = ''

  constructor(private cardService: CardService, private router: Router) { }

  ngOnInit() {
  }

  postPayment(){
    this.cardService.addPayment(this.newName, this.newNumber,this.newExpDate,this.newCVV).subscribe(()=>{
      this.router.navigate([''])
    })
  }

}
