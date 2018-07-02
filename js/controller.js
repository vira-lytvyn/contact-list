export class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.view.addContactBtn.addEventListener('click', this.addContact.bind(this));

    // move to item controller
    this.view.editContact.addEventListener('click', this.editContact.bind(this));
    this.view.saveContact.addEventListener('click', this.editContact.bind(this));
    this.view.deleteContact.addEventListener('click', this.addContact.bind(this));
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

Controller.prototype.editContact = function(event, param2, param3, param4) {
  console.log(event, param2, param3, param4);
  this.view.enableEditingContact();
};

Controller.prototype.saveContact = function(event, param2, param3, param4) {
  console.log(event, param2, param3, param4);
  let contact = this.view.getUpdatedContact();
  this.model.saveEditedContact(contact);
  this.updateContactsTable();
};

Controller.prototype.deleteContact = function(event, param2, param3, param4) {
  console.log(event, param2, param3, param4);
  let contactID = this.view.getItemId();
  this.model.deleteContact(contact);
  this.updateContactsTable();
};
