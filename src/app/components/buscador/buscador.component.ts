import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: []
})
export class BuscadorComponent implements OnInit {
  heroes: Heroe[] = [];
  termino:string;
  constructor( private _heroesService: HeroesService , private activatedRoute: ActivatedRoute, private router: Router
    ) {   }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params =>{
      this.heroes = this._heroesService.searchHeroes( params[ 'termino' ] );
      this.termino=params[ 'termino' ]
  });
  }
  verHeroe( idx: number ) {
    this.router.navigate(['/heroe', idx]);
  }
}
