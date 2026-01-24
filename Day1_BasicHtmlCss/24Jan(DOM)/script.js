

let h1 = document.querySelector('h1');
h1.addEventListener('click', () => {
    console.log('Hello');
},{
    once: true  // it use to run only once
});

let main = document.querySelector('main');
main.addEventListener('click', () => {
    console.log('main');
},{
    capture: true // it is used to go from parent to children
});