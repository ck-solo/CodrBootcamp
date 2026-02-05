higher Order Function
callback function
settimeout

let arr = [1,2,3,4,5]
arr.forEach(function[item]{
    console.log(item)
})


OOPS
class is the blueprint of objects 
class Dog{
    constuctor(name, classes, color){
        this.name = name;
        this.classes = classes;
        this.color = color
    }

    print(){
        console.log(this.color)
    }
}

 print(){
        console.log(this.color)
    }


class ke andar bane function ko method kehte hai 
 this is method
this refere the current object 

this represent provide whole object


koi bhi function agar constructor ke bahar bhi call hota ho aur fir wo us constructor me kahi bhi use hoga to wo use ho jayega 
Encapusulation

inheritance


abstraction

function overloading same name function just adding the more params value extending them 

function sum(){

return 
}

function sum(){
    return a
}


classes
constructor
objects
new keywords
this
function overriding
function overloading
inheritance
abstraction



# Oop Questions

1. Design Person and Employee

        

Requirements:

- Person: name, age, introduce() → "Hi, I'm [name], [age] years old."
- Employee extends Person
- Extra: jobTitle, salary
- Override introduce() → add "I work as [jobTitle]"
- Extra method: getAnnualSalary() → salary * 12

### 2. Design Library that manages books (composition)

Requirements:

- Has property: books (array)
- Method: addBook(book) → book is object {title, author}
- Method: removeBook(title) → find by title and remove
- Method: listBooks() → console.log all book titles
- Method: findBook(title) → return the book object or null

### 3. The "Wrong Discount Applied" (Product + Discount Rules)

**Real World Scenario**
You're building a small e-commerce cart. Some products have festive discount (20%), some have loyalty discount (10%), some have no discount.

**The Trap**
Using if-else everywhere in checkout code becomes messy when new discount types come (Black Friday, student discount…).

### 4. The "Price Changed After Adding to Cart" Trap

**Real World Scenario**
User adds a phone to cart at ₹15,000 during a flash sale. Later the price changes to ₹18,000 (or discount ends). But when user checks out, the cart still shows old price — company loses money.

**The Trap**
If Cart just stores { product, quantity } and always reads current product.price, it uses live price → wrong total. If it copies price once, it misses updates when needed (e.g. price drop refund policy).

**What you want**

- Design so cart captures **price at time of addition**
- Easy method like cart.getTotal() uses locked prices
- Bonus: flag if price changed since added ("Price increased by ₹3000")