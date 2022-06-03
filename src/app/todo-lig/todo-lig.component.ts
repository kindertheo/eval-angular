import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-lig',
  templateUrl: './todo-lig.component.html',
  styleUrls: ['./todo-lig.component.css']
})
export class TodoLigComponent implements OnInit {

  @Input() contenu: string
  @Input() paire?: boolean
  constructor() {
    this.contenu = ""
  }

  ngOnInit(): void {
  }

}
