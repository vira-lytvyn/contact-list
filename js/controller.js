import {Contact} from './contact.js';

export class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.view.addContactBtn.addEventListener('click', this.addContact.bind(this));
  }
}

Controller.prototype.updateContactsTable = function() {
  this.view.renderList(this.model.getContactsList());
};

Controller.prototype.addContact = function() {
  let contact = this.view.readContactData();
  this.model.saveContact(contact);
  this.updateContactsTable();
};
