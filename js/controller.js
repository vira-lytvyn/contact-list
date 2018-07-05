import {qs, qsa, ga} from './helpers.js';

export class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.view.addContactBtn.addEventListener('click',
      this.addContact.bind(this));
  }
}

Controller.prototype.attachHandlers = function() {
  const contactRecords = qsa('.contact-record', this.view.contactList);

  contactRecords.forEach((contactRecord) => {
    let contactId = ga(contactRecord);

    qs('.edit-btn', contactRecord).addEventListener('click',
      this.view.enableEditingContact.bind(this, contactRecord));
    qs('.save-btn', contactRecord).addEventListener('click',
      this.saveContact.bind(this, contactRecord));
    qs('.delete-btn', contactRecord).addEventListener('click',
      this.deleteContact.bind(this, contactId));
  });
};

Controller.prototype.updateContactsTable = function() {
  this.view.renderList(this.model.getContactsList());
  this.attachHandlers();
};

Controller.prototype.addContact = function() {
  let contact = this.view.readContactData();
  this.model.saveContact(contact);
  this.updateContactsTable();
};

Controller.prototype.saveContact = function(contactRecord) {
  let contact = this.view.getUpdatedContact(contactRecord);
  this.model.saveEditedContact(contact);
  this.updateContactsTable();
};

Controller.prototype.deleteContact = function(contactId) {
  this.model.deleteContact(contactId);
  this.updateContactsTable();
};
