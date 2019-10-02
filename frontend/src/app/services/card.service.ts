import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CardService {

  url = 'http://localhost:49896/api'

  constructor(private http: HttpClient) { }

  getPayments(){
    return this.http.get(`${this.url}/Payments`)
  }

  getPayment(id){
    return this.http.get(`${this.url}/Payments/${id}`)
  }

  addPayment(name, number,expdate,cvv){
    return this.http.post(`${this.url}/Payments`, {name, number,expdate,cvv})
  }

  updatePayment(id, name, number,expdate,cvv){
    return this.http.put(`${this.url}/Payments/${id}`, {id, name, number,expdate,cvv})
  }

  deletePayment(id){
    return this.http.delete(`${this.url}/Payments/${id}`)
  }
}
