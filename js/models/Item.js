import uuid from 'uuid/v4';

export default class Item {
  constructor(name, modificationDate) {
    this.uuid = uuid();
    this.name = name;
    this.modificationDate = modificationDate;
  }
}
