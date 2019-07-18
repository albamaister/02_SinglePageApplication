import { Component } from '@angular/core';
import { HeroesService, Heroe } from '../../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor( private _heroesService: HeroesService , private router: Router
    ) { }

  searchHero(termino: string ) {
    this.router.navigate(['/buscar', termino]);
  }

}
