import { HeroesService, Heroe } from '../../servicios/heroes.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  
  constructor(private heroesService: HeroesService, private router: Router) { }

  ngOnInit() {
    this.heroes = this.heroesService.getHeroes();
    //console.log(this.heroes);
  }

  verHeroe(idx: number) {
    this.router.navigate(['/heroe', idx]);
  }
}
