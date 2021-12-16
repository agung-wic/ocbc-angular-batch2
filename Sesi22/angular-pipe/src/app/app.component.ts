import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-pipe';

  birthday = new Date(2017, 9, 9)

  heroes = [
    { id: 1, name: 'Dr Nice', emotion: 'happy' },
    { id: 2, name: 'Narco', emotion: 'sad' },
    { id: 3, name: 'Windstorm', emotion: 'confuse' },
    { id: 4, name: 'Magneto' }
  ]
}
