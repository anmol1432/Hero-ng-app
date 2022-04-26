import { Component, OnInit,Input } from '@angular/core';
import { Hero } from '../heroes/hero';
import { Heroes } from "../heroes/mock_heroes";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero?: Hero; // get data from parent component one way binding
  constructor() { }

  ngOnInit(): void {
  }
}
