import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  heroes: any[] = [];
  termino: string;

  constructor(private activaredRoute: ActivatedRoute, private heroeService: HeroesService) { }

  ngOnInit() {
    this.activaredRoute.params.subscribe(params => {
      this.termino = params['termino'];
      this.heroes = this.heroeService.buscarHeroe(params['termino']);
      console.log(this.heroes);
    });
  }

}
