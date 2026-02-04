class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  intro() {
    console.log(`Hi, I'm ${this.name}, ${this.age} years old.`);
  }
}

class Employee extends Person {
  constructor(name, age, jobTitle, salary) {
    super(name, age); // send name & age to Person

    this.jobTitle = jobTitle;
    this.salary = salary;
  }

  intro() {
    super.intro(); // call Person's intro
    console.log(`I work as ${this.jobTitle}`);
  }

  getAnnualSalary() {
    return this.salary * 12;
  }
}

let firstperson = new Employee("Rohan", 12, "Developer", 12000);
let secondperson = new Employee("Sohan", 19, "Designer", 19000);

// firstperson.intro();
// console.log("Annual Salary:", firstperson.getAnnualSalary());

// console.log("\n");

// secondperson.intro()
// console.log("Annual Salary:", secondperson.getAnnualSalary())

// ******************************************************************

class Library {
  constructor(books) {
    this.books = [];
  }
  addBook(book) {
    this.books.push(book);
    console.log("book add:", book.name);
  }
  removeBook(name) {
    this.books = this.books.filter((book) => book.name !== name);
    console.log("book removed", name);
  }
  listData() {
    this.books.forEach((book) => {
      console.log(book.name);
    });
  }
  findBook(name) {
    const find = this.books.find((book) => book.name === name);
    return find || null;
  }
}

const myLibrary = new Library();

// myLibrary.addBook({ name: "Harry Potter", author: "J.K Rowling" });
// myLibrary.addBook({ name: "Atomic Habits", author: "James Clear" });
// myLibrary.addBook({ name: "The Almanack of Naval Ravikant", author: "Tim Ferriss" });

// myLibrary.listData()
// console.log(myLibrary.findBook("Harry Potter"))

// myLibrary.removeBook("Harry Potter")

// myLibrary.listData()

// ***********************************************************

class Discount {
  apply(price) {
    return price;
  }
}

class FestiveDiscount extends Discount {
  apply(price) {
    return price * 0.8; // 20% off
  }
}

class LoyaltyDiscount extends Discount {
  apply(price) {
    return price * 0.9; // 10% off
  }
}

class NoDiscount extends Discount {
  apply(price) {
    return price;
  }
}

class Cart {
  constructor(discount) {
    this.discount = discount;
  }

  checkout(price) {
    return this.discount.apply(price);
  }
}

// const cart1 = new Cart(new FestiveDiscount());
// console.log(cart1.checkout(100));

// const cart2 = new Cart(new LoyaltyDiscount());
// console.log(cart2.checkout(100));

// const cart3 = new Cart(new NoDiscount());
// console.log(cart3.checkout(100));

// *********************************************************
// Product class: live product info
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

// Cart Item stores snapshot only
class CartItem {
  constructor(productName, lockedPrice, quantity) {
    this.productName = productName;
    this.lockedPrice = lockedPrice;
    this.quantity = quantity;
  }

  getTotal() {
    return this.lockedPrice * this.quantity;
  }
}

class AddedCart {
  constructor() {
    this.items = [];
  }

  addItem(product, quantity) {
    const item = new CartItem(product.name, product.price, quantity);

    this.items.push(item);
  }

  getTotal() {
    return this.items.reduce((sum, item) => sum + item.getTotal(), 0);
  }
}

// -------- DEMO ----------
const phone = new Product("Smartphone", 17000);
const cart = new AddedCart();

cart.addItem(phone, 1);

console.log(cart.getTotal()); // 15000

phone.price = 18000; // price changed

console.log(cart.getTotal()); // still 15000
