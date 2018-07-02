import {qs, qsa} from './helpers.js';
import {Contact} from './contact.js';
import {Controller} from './controller.js';

export class View {
  constructor() {
    this.contactList = qs('.contacts-list tbody');
    this.newContactForm = qs('.new-contact');
    this.addContactBtn = qs('.add-contact-btn', this.newContactForm);
    
    // move to item view, pass item id into selector
    this.editContact = qsa('.edit-btn', this.contactList);
    this.saveContact = qsa('.save-btn', this.contactList);
    this.deleteContact = qsa('.delete-btn', this.contactList);
  }
}

View.prototype.renderListItem = function(item) {
  return `<tr>
      <td>${item.name}</td>
      <td>${item.cell}</td>
      <td>${item.email}</td>
      <td>
        <button type="button" class="edit-btn" data-contact-id="${item.id}">Edit</button>
        <button type="button" class="save-btn" data-contact-id="${item.id}">Save</button>
        <button type="button" class="delete-btn" data-contact-id="${item.id}">Delete</button>
      </td>
    </tr>`;
};

View.prototype.renderList = function(list) {
  let renderedList = '';

  list.forEach((element) => {
    renderedList += this.renderListItem(element);
  });
  this.contactList.innerHTML = renderedList;
};

View.prototype.readContactData = function() {
  let name = qs('#name', this.newContactForm).value;
  let cell = qs('#cell', this.newContactForm).value;
  let email = qs('#email', this.newContactForm).value;

  return new Contact(name, cell, email);
};

View.prototype.enableEditingContact = function() {
  // body... 
};

View.prototype.getUpdatedContact = function() {
  // body... 
};

View.prototype.getItemId = function() {
  // body... 
};
