import { Injectable } from '@angular/core';
import {  Hero } from "../heroes/hero";
import { Heroes } from "../heroes/mock_heroes";

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  getHeroes(): Hero[] {
    return Heroes;
  }
  constructor() { }

}