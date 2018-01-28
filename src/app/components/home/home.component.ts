import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, NgForm} from '@angular/forms';
import { SiteModel } from '../../models/SiteModel';
import { SiteService } from '../../services/site.service';

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
  siteModel = new SiteModel();

  constructor(private _site: SiteService) { }

  // Inicializamos las propiedades
  ngOnInit() {
    this._site.site.subscribe((res) => { this.sitiosInteres = res });
    this.formTitle = "Agrega un item a la lista";
    this.listTitle = "Lista de items";
    this.btnText = "Agregar item";
  }

  // Actualizamos el sitio de interes principal
  setSite(site: iSite) {
    this.site = site;
  }

  // manejador del formulario
  onSubmit(f: NgForm) {
    this.sitiosInteres.unshift(this.siteModel.toObject());
    f.reset();
    this._site.changeSites(this.sitiosInteres);
  }
}

// Interfaz para sitios
interface iSite{
  name: string,
  url: string
}
