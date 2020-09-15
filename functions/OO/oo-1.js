function Product(name, price, discount = 0.5) {
  this.name = name;
  this.price = price;
  this.discount = discount;

  this.finalPrice = () => this.price * (1 - this.discount);
}

const product = new Product("T-shirt", 100);
console.log(product.finalPrice());
