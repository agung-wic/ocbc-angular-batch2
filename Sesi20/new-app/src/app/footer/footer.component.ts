import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() newItemEvent: EventEmitter<string> = new EventEmitter();

  addNewItem(value: string){
    this.newItemEvent.emit(value);
  }

}
