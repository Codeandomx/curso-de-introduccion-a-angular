import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'acerca', component: AboutComponent }
];

@NgModule({
  imports: [
  	FormsModule,
  	CommonModule,
  	RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: [
  	HomeComponent,
  	AboutComponent
  ]
})
export class AppRoutingModule { }