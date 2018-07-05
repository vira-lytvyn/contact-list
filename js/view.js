import {qs, sca, tc, ga} from './helpers.js';
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
    <td class="name">${item.name}</td>
    <td class="cell">${item.cell}</td>
    <td class="email">${item.email}</td>
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
  const name = qs('#name', this.newContactForm).value;
  const cell = qs('#cell', this.newContactForm).value;
  const email = qs('#email', this.newContactForm).value;

  return new Contact(name, cell, email);
};

View.prototype.enableEditingContact = function(rowEl) {
  sca(rowEl, true);
  tc(rowEl);
};

View.prototype.getUpdatedContact = function(rowEl) {
  const name = qs('.name', rowEl).innerText;
  const cell = qs('.cell', rowEl).innerText;
  const email = qs('.email', rowEl).innerText;
  let contact = new Contact(name, cell, email);
  contact.id = ga(rowEl);

  return contact;
};
