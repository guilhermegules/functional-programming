function Product(name, price, discount = 0.5) {
  this.name = name;
  this.price = price;
  this._discount = discount;

  this.finalPrice = () => this.price * (1 - this._discount);
}

Product.prototype.toString = function () {
  console.log(
    `
     Name: ${this.name}
     Price: ${this.price}
     Discount: ${this.discount}
    `
  );
};

Object.defineProperty(Product.prototype, "discount", {
  get: function () {
    return this._discount;
  },
  set: function (newDiscount) {
    if (newDiscount >= 0) {
      this._discount = newDiscount;
    }
  },
});

Object.defineProperty(Product.prototype, "discountString", {
  get: function () {
    return `${this._discount * 100}% discount`;
  },
});

const product = new Product("T-shirt", 100);

product.discount = 0.3;

console.log(product.finalPrice());
console.log(product.discount);
console.log(product.discountString);
product.toString();
