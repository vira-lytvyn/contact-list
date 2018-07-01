export class Store {
	constructor(collectionName) {
		this.dbName = collectionName;

		if (!localStorage[collectionName]) {
			let data = {
				contacts: []
			}

			localStorage.setItem(collectionName, JSON.stringify(data));
		}
	}
}

Store.prototype.getContactsList = function(){
	return JSON.parse(localStorage.getItem(this.dbName)).contacts;
};

Store.prototype.addContact = function(contact){
	let contactsList = this.getContactsList();

	contactsList.push(contact);
	this.updateCollection(contactsList);
};

Store.prototype.updateCollection = function(data){
	localStorage.setItem(this.dbName, JSON.stringify(data));
};
