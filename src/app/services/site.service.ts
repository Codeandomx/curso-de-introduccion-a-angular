import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class SiteService {

	private sites = new BehaviorSubject<any>([]);
	site = this.sites.asObservable();

	constructor() { }

	changeSites(site) {
		this.sites.next(site);
	}
}
