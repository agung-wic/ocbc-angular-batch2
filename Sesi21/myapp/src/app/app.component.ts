import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';

  // isActive = true
  heroes = [
    { id: 1, name: 'Dr Nice', emotion: 'happy' },
    { id: 2, name: 'Narco', emotion: 'sad' },
    { id: 3, name: 'Windstorm', emotion: 'confuse' },
    { id: 4, name: 'Magneto' }
  ]

  peoples: any[] = [
    {
      "name": "Douglas Pace",
      "age": 35,
      "country": 'Mars'
    },
    {
      "name": "Mcleod Mueler",
      "age": 32,
      "country": 'USA'
    },
    {
      "name": "Day Meyers",
      "age": 21,
      "country": 'HK'
    },
    {
      "name": "Aguirre Ellis",
      "age": 34,
      "country": 'UK'
    },
    {
      "name": "Cook Tyson",
      "age": 32,
      "country": 'USA'
    },
  ]

  isSpecial = true;
  isItalic = true;
  isBold = true;

  currentStyles = {
    'font-style': this.isItalic ? 'italic' : 'normal',
    'font-weight': 'bold',
    'font-size': '24px'
  }
}
