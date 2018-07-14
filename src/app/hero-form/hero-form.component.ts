import { Component } from '@angular/core';
import { Hero } from '../hero'

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {

  powers = ['Very Smart', 'Very Lucky', 'Very Flexible', 'Very Berry'];

  model = new Hero(18, 'Dr. IQ', this.powers[0], 'Chuck Boris');

  submitted = false;

  onSubmit() { this.submitted = true; }

  newHero() {
    this.model = new Hero(42, '', '');
  }

}
