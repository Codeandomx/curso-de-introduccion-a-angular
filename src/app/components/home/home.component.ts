import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	sitiosInteres: any[];
  formTitle: string;
  listTitle: string;
  btnText: string;
  list: any[];
  site: iSite;

    constructor() { }

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

    setSite(site: iSite) {
      this.site = site;
    }

}

interface iSite{
  name: string,
  url: string
}
