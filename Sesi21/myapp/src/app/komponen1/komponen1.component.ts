import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-komponen1',
  templateUrl: './komponen1.component.html',
  styleUrls: ['./komponen1.component.css']
})
export class Komponen1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // isLoggedIn = true
  // nullValue = null
  // currentUser = {
  //   username: "agung"
  // }

  // Structural Directives: NgIf Component

  // @Input() hero: any
  @Input() people: any

}
