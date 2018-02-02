export class SiteModel
{
	id? : string;
	name? : string;
	url? : string;

	// Metodos getter
	getName() {
		// Quitamos espacios en blanco
		let name = this.name.trim();
		// Ponemos en minusculas la primer letra
		return name.charAt(0).toUpperCase() + name.slice(1);
	}
	getUrl() {
		// Ponemos el string en minusculas
		let url = this.url.toLowerCase();
		// Quitamos todos los espacios en blanco
		return url.replace(/ /g, "");
	}

	// Metodos
	toObject(){
		return {
			name: this.getName(),
			url: this.getUrl()
		}
	}
}