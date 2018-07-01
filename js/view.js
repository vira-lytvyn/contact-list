import {qs} from './helpers.js'

export class View {
	constructor(template) {
		this.template = template;
		this.contactList = qs('.contacts-list');
		this.newContact = qs('.new-contact');
	}
}

View.prototype.renderListItem = function(item) {
	return `Name ${item.name} , cell: ${item.cell}, email: ${item.email}`;
};

View.prototype.renderList = function(list){
	let renderedList = '';

	list.forEach((element) => {
		renderedList += renderListItem(element);
	});
	this.contactList.innerText = renderedList;
};
