import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
// import { Heroes } from "./mock_heroes";
import { HeroService } from "../services/hero.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes:Hero[] = [];
  selectedHero?: Hero;
  
  onSelect(hero: Hero): void {
    console.log("the selectedHero :-------> ",hero.name)
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }

  constructor(private heroService : HeroService) {}
  ngOnInit(): void {
    this.getHeroes();
  }
}
