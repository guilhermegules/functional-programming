class Product {
  constructor(name, price, discount) {
    this._name = name;
    this._price = price;
    this.discount = discount;
  }

  finalPrice() {
    return this.price * (1 - this.discount);
  }

  get getName() {
    return this._name;
  }

  set setNameUppercase(name) {
    this._name = name.toUpperCase();
  }

  get getPrice() {
    return this._price;
  }

  set setPrice(price) {
    if (price >= 0) {
      this._price = price;
    }
  }
}

const p = new Product("Car", 50000, 0.8);

p.setNameUppercase = "car";
p.setPrice = 100;

console.log(p.finalPrice());
console.log(p.getName);
console.log(p.getPrice);
