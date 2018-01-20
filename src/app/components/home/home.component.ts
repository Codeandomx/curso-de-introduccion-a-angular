import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
