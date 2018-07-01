import {Contact} from './contact.js';

export class Controller {
	constructor(model, view) {
		this.model = model;
		this.view = view;
	}
}

Controller.prototype.updateContactsTable = function(){
	this.view.renderList(this.model.getContactsList());
};
