import { Component, OnInit } from '@angular/core';
import { DogsService } from '../../services/dogs.service'
import { Dogs } from '../../models/dogs'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dogs: Dogs[] = []
  sex = ['Masculin', 'Feminin']

  newRasa = ''
  newVarsta = 0
  newGreutate = 0
  newSex = ''

  updateId = -1

  searchRasa = ""

  sorted = false
  sortedByRasa = false
  sortedByVarsta = false
  sortedByGreutate = false
  sortedBySex = false

  constructor(private dogsService: DogsService) { }

  ngOnInit() {
    this.getDogs()
  }

  getDogs(){
    this.dogsService.getDogs().subscribe((dogs: Dogs[])=>{
      this.dogs = dogs
      console.log(this.dogs)
    })
  }

  addDog(newRasa, newVarsta, newGreutate, newSex){
    this.dogsService.addDog(newRasa, newVarsta, newGreutate, newSex).subscribe(()=>{
      this.getDogs()
      this.refreshNewValues()
    })
  }

  updateDog(updateId, newRasa, newVarsta, newGreutate, newSex){
    this.dogsService.updateDog(updateId, newRasa, newVarsta, newGreutate, newSex).subscribe(()=>{
      this.getDogs()
      this.refreshNewValues()
    })
  }

  deleteDog(id){
    this.dogsService.deleteDog(id).subscribe(()=>{
      this.getDogs()
      this.refreshNewValues()
    })
  }

  cancel(){
    this.refreshNewValues()
  }

  selectSex(s){
    this.newSex = s
  }

  refreshNewValues(){
    this.updateId = -1
    this.newRasa = ''
    this.newVarsta = 0
    this.newGreutate = 0
    this.newSex = ''
  }

  populateForm(id, rasa, varsta, greutate, sex){
    this.updateId = id
    this.newRasa = rasa
    this.newVarsta = varsta
    this.newGreutate = greutate
    this.newSex = sex
  }

  search(){
    if(this.searchRasa === "")
      this.getDogs()
    else{
      this.dogs = this.dogs.filter(res => {
        return res.rasa.toLocaleLowerCase().match(this.searchRasa.toLocaleLowerCase())
      })
    }
  }

  sortByRasa(){
    if(!this.sorted){
      this.dogs.sort((a,b)=> (a.rasa > b.rasa) ? 1 : -1)
      this.sortedByRasa = true
      this.sorted = true
    }
    else{
      this.getDogs()
      this.sorted = false
      this.sortedByRasa = false
    }
  }

  sortByVarsta(){
    if(!this.sorted){
      this.dogs.sort((a,b)=> (a.varsta > b.varsta) ? 1 : -1)
      this.sorted = true
      this.sortedByVarsta = true
    }
    else{
      this.getDogs()
      this.sorted = false
      this.sortedByVarsta = false
    }
  }

  sortByGreutate(){
    if(!this.sorted){
      this.dogs.sort((a,b)=> (a.greutate > b.greutate) ? 1 : -1)
      this.sorted = true
      this.sortedByGreutate = true
    }
    else{
      this.getDogs()
      this.sorted = false
      this.sortedByGreutate = false
    }
  }

  sortBySex(){
    if(!this.sorted){
      this.dogs.sort((a,b)=> (a.sex > b.sex) ? 1 : -1)
      this.sorted = true
      this.sortedBySex = true
    }
    else{
      this.getDogs()
      this.sorted = false
      this.sortedBySex = false
    }
  }

}
