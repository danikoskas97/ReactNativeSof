class Category {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}
export default Category

class Item {
  constructor(id, title, price, imageUrl) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.imageUrl = imageUrl;
  }
}

export default Item