import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-root',
  template: `
  <h1>{{ title }}</h1>
  <h2>My favorite hero is: {{ myHero }}</h2>
  <h3>My 2nd favorite hero is: {{ Hero }}</h3>
  <p>Heroes list:</p>
  <ul>
    <li *ngFor="let h of heroes">
      {{ h.id }} {{h.name}}
    </li>
  </ul>
  <p *ngIf ="heroes.length>3 ">There are many heroes!</p>
  `
})
export class AppComponent {
  //title = 'Tour of Heroes';
  //myHero = 'Windstorm';
  //heroes = ['IronMan', 'Hulk', 'Captain America', 'Thor' ];
  heroes = [
    new Hero(1, 'IronMan'),
    new Hero(2, 'Thor'),
    new Hero(3, 'Captain America'),
    new Hero(4, 'Hulk')
];
  Hero = this.heroes[0];

  title: string;
  myHero: string;
  
  constructor() {
    this.title = 'Tour of Heroes';
    this.myHero = 'Windstorm';
  }
}
