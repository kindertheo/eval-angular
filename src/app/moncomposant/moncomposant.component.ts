import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moncomposant',
  templateUrl: './moncomposant.component.html',
  styleUrls: ['./moncomposant.component.css']
})
export class MoncomposantComponent implements OnInit {

  monContenu: string
  constructor() {
    this.monContenu = ""
  }

  ngOnInit(): void {
  }
  maFonction() {
    alert("On a clické")
  }
}
