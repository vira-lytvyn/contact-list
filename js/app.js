import { View } from './view.js'
import { Store } from './store.js'


function init() {
	this.view = new View();
	this.store = new Store();

	this.view.renderList(this.store.getContactsList());
}

window.addEventListener('load', init);