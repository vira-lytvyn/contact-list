import {View} from './view.js';
import {Store} from './store.js';
import {Controller} from './controller.js';

function init() {
  this.view = new View();
  this.model = new Store('contacts');
  this.controller = new Controller(this.model, this.view);

  this.controller.updateContactsTable();
}

window.addEventListener('load', init);
