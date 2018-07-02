import {Contact} from './contact.js';

export class Controller {
	constructor(model, view) {
		this.model = model;
		this.view = view;
	}
}

Controller.prototype.updateContactsTable = function() {
	console.log(this.view, this.model)
	this.view.renderList(this.model.getContactsList());
};

Controller.prototype.addContact = function(event) {
	console.log(event);
	event.preventDefault();
	console.log(this.view, this.model)
	let contact = this.view.readContactData();
	this.model.saveContact(contact);
};
