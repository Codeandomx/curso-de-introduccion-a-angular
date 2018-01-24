import { Component, OnInit } from '@angular/core';

// Decorador
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

// clase del componente
export class HomeComponent implements OnInit
{
  // propiedades
	sitiosInteres: any[];
  formTitle: string;
  listTitle: string;
  btnText: string;
  site: iSite;

  constructor() { }

  // Inicializamos las propiedades
  ngOnInit() {
    this.sitiosInteres = [
      { name: 'Blog Codeando', url: 'http://blog.codeando.org' },
      { name: 'Github', url: 'https://github.com/codeandomx' },
      { name: 'Twitter', url: 'https://twitter.com/codeando_org' },
      { name: 'Facebook', url: 'https://facebook.com/codeando.org' }
    ];
    this.formTitle = "Agrega un item a la lista";
    this.listTitle = "Lista de items";
    this.btnText = "Agregar item";
    this.site = { name: 'Blog Codeando', url: 'http://blog.codeando.org' };
  }

  // Actualizamos el sitio de interes principal
  setSite(site: iSite) {
    this.site = site;
  }
}

// Interfaz para sitios
interface iSite{
  name: string,
  url: string
}
