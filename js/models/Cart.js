export default class Cart {
  constructor(name, modificationDate, items, archived = false) {
    this.name = name;
    this.modificationDate = modificationDate;
    this.items = items;
    this.archived = archived;
  }
}
