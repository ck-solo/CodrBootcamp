let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = e.target[0].value;
  let email = e.target[1].value;
  let mobile = e.target[2].value;
  let gender = e.target[3].value;
  let password = e.target[4].value;

  if (!name || !email || !mobile || !gender || !password) {
    alert("all fields are required");
  }

  let checkPass = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
  let res = checkPass.test(password);

  if (!res) { 
    alert("please match password");
  }

  let checkEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let em = checkEmail.test(email);
  if (!em) {
    alert("please match email");
  }

  console.log(name, email, mobile, gender, password);

  form.reset()
});

// let checkPass = /^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]+$/;
// let res = checkPass.test("Hello@000");
// console.log(res);

let checkPass = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
let res = checkPass.test("Hello@000");
console.log(res);