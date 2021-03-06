import uuid from 'uuid/v4';

export default class Cart {
  constructor(name, modificationDate, items, archived = false) {
    this.uuid = uuid();
    this.name = name;
    this.modificationDate = modificationDate;
    this.items = items;
    this.archived = archived;
  }
}
