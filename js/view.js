import {qs} from './helpers.js';
import {Contact} from './contact.js';
import {Controller} from './controller.js';

export class View {
	constructor(template) {
		this.template = template;
		this.contactList = qs('.contacts-list');
		this.newContactForm = qs('.new-contact');
	}
}

View.prototype.renderListItem = function(item) {
	return `Name ${item.name} , cell: ${item.cell}, email: ${item.email}`;
};

View.prototype.renderList = function(list) {
	let renderedList = '';

	list.forEach((element) => {
		renderedList += renderListItem(element);
	});
	this.contactList.innerText = renderedList;
};

View.prototype.readContactData = function() {
	let name = qs('#name', this.newContactForm).value;
	let cell = qs('#cell', this.newContactForm).value;
	let email = qs('#email', this.newContactForm).value;

	return new Contact(name, cell, email);
};
