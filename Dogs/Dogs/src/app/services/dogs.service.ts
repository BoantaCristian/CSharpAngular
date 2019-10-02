import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DogsService {

  url = 'http://localhost:55772/api'

  constructor(private http:HttpClient) { }

  getDogs(){
    return this.http.get(`${this.url}/Dogs`)
  }

  getDog(id){
    return this.http.get(`${this.url}/Dogs/${id}`)
  }

  addDog(rasa, varsta, greutate, sex){
    return this.http.post(`${this.url}/Dogs`, {rasa, varsta, greutate,sex})
  }

  updateDog(id, rasa, varsta, greutate, sex){
    return this.http.put(`${this.url}/Dogs/${id}`, {id, rasa, varsta, greutate, sex})
  }

  deleteDog(id){
    return this.http.delete(`${this.url}/Dogs/${id}`)
  }

}
