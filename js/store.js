export class Store {
  constructor(collectionName) {
    this.dbName = collectionName;

    if (!localStorage[collectionName]) {
      localStorage.setItem(collectionName, JSON.stringify([]));
    }
  }
}

Store.prototype.getContactsList = function() {
  return JSON.parse(localStorage.getItem(this.dbName));
};

Store.prototype.saveContact = function(contact) {
  let contactsList = this.getContactsList();

  contact.id = contactsList.length;
  contactsList.push(contact);
  this.updateCollection(contactsList);
};

Store.prototype.updateCollection = function(data) {
  localStorage.setItem(this.dbName, JSON.stringify(data));
};

Store.prototype.saveEditedContact = function(contact){
  let contactsList = this.getContactsList();
  let cIndex = findContactIndex(contactsList, contact.id);

  contactsList.splice(cIndex, 1, contact);
  this.updateCollection(contactsList);
};

Store.prototype.deleteContact = function(contactId){
  let contactsList = this.getContactsList();
  let cIndex = findContactIndex(contactsList, contactId);

  contactsList.splice(cIndex, 1);
  this.updateCollection(contactsList);
};

function findContactIndex(collection, id) {
  return collection.findIndex((el) => el.id === id);
}
