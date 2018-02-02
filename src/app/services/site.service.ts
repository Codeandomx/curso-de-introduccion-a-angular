import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { 
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument 
} from 'angularfire2/firestore';
import { SiteModel } from '../models/SiteModel';

@Injectable()
export class SiteService {
	sitesCollection: AngularFirestoreCollection<SiteModel>;
	sites: Observable<SiteModel[]>;
	siteDoc: AngularFirestoreDocument<SiteModel>;

	constructor(public afs : AngularFirestore) {
	    this.sitesCollection = this.afs.collection('sites');
	    this.sites = this.sitesCollection.snapshotChanges().map(changes => {
	      	return changes.map(_data => {
	        	const data = _data.payload.doc.data() as SiteModel;
	        	data.id = _data.payload.doc.id;
	        	return data;
	      	});
	    });
	}

  	getSites() {
    	return this.sites; 
  	}

  	setSite(site: SiteModel) {
    	this.sitesCollection.add(site);
  	}

  	deleteSite(site: SiteModel) {
    	this.siteDoc = this.afs.doc(`sites/${site.id}`);
    	this.siteDoc.delete();
  	}

  	updateSite(site: SiteModel) {
    	this.siteDoc = this.afs.doc(`sites/${site.id}`);
    	this.siteDoc.update(site);
  	}
}