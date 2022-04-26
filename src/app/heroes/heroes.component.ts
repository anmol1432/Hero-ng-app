import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { Heroes } from "./mock_heroes";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes:Hero[] = Heroes;
  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    console.log("the selectedHero :-------> ",hero.name)
    this.selectedHero = hero;
  }
  constructor() {}
  ngOnInit(): void {}
}
