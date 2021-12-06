import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-komponen1',
  templateUrl: './komponen1.component.html',
  styleUrls: ['./komponen1.component.css']
})
export class Komponen1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

}
