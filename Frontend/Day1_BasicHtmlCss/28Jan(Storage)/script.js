let main = document.querySelector("main");
let container = document.querySelectorAll(".container");
let card = document.querySelector(".card");

let form = document.querySelector(".form");
let formForm = document.querySelector(".form form");
let formInput = document.querySelectorAll(".form input");
let formButton = document.querySelector(".form button");

formForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Hello");

  container.forEach((e) => {
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML += ` <img
          src="https://images.unsplash.com/photo-1761839257864-c6ccab7238de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
          alt="Card Image"
        />

        <div class="card-content">
          <h3>Card Title</h3>
          <p>Gmail</p>
          <p>Number</p>
        </div>
        <button>Delete</button>`;
  });

  console.log(e)
});
