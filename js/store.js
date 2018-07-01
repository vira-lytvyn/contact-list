export class Store {
	getContactsList() {
		return localStorage.getItem('contacts') || [];
	}

	addContact(contact) {
		let contactsList = this.getContactsList();

		contactsList.push(contact);
		localStorage.setItem('contacts', contactsList);
	}
}
