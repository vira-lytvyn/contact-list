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

  contactsList.push(contact);
  this.updateCollection(contactsList);
};

Store.prototype.updateCollection = function(data) {
  localStorage.setItem(this.dbName, JSON.stringify(data));
};
