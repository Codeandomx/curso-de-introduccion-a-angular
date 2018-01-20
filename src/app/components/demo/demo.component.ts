import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit
{
  // creamos un array para almacenar cadenas
  sitiosInteres: any = [];

  constructor() { }

  ngOnInit() {
  	this.sitiosInteres = [
      { name: 'Blog Codeando', url: 'http://blog.codeando.org' },
      { name: 'Github', url: 'https://github.com/codeandomx' },
      { name: 'Twitter', url: 'https://twitter.com/codeando_org' },
      { name: 'Facebook', url: 'https://facebook.com/codeando.org' }
    ];
  }

}
