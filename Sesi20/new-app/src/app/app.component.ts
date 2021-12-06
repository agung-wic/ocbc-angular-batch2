import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'new-app';

  parrentMessage = "Hallo nama saya Agung";

  list = ['sepatu', 'sandal']

  addItemInParent(value: string){
    this.list.push(value)
  }
}
