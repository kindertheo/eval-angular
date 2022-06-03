import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  taches: string[]
  tacheEnCour = ""
  paire: boolean
  constructor() {
    this.taches = ["promener le chien", "faire les courses"]
    this.paire = true
  }

  ngOnInit(): void {
  }
  ajoutTache() {
    this.taches.push(this.tacheEnCour)
    this.tacheEnCour = ""
  }
  getPaire() {
    this.paire = !this.paire
    return this.paire
  }
}
