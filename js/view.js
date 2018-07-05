import {qs} from './helpers.js';
import {Contact} from './contact.js';

export class View {
  constructor() {
    this.contactList = qs('.contacts-list tbody');
    this.newContactForm = qs('.new-contact');
    this.addContactBtn = qs('.add-contact-btn', this.newContactForm);
  }
}

View.prototype.renderListItem = function(item) {
  return `<tr class="contact-record" data-contact-id="${item.id}">
    <td>${item.name}</td>
    <td>${item.cell}</td>
    <td>${item.email}</td>
    <td>
      <button type="button" class="edit-btn">Edit</button>
      <button type="button" class="save-btn">Save</button>
      <button type="button" class="delete-btn">Delete</button>
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

View.prototype.enableEditingContact = function(rowEl) {
  console.log(rowEl);
};

View.prototype.getUpdatedContact = function(rowEl) {
  // body... 
};
