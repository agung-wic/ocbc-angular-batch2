import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  // parrentMessage = 'Hello ini pesan dari parent';
  items = ['sepatu', 'sendal', 'tas']

  addItemInParrent(newItem: string) {
    this.items.push(newItem);
  }
}
