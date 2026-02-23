// fetch 
let userapi = ("https://fakestoreapi.com/users")

let res = fetch(userapi)

res.then((val) => val.json()).then((val) => console.log(val))







async function call(){
    try{
        let res = await fetch(userapi)
        let data = await res.json()
        console.log(data)
    }catch(err){
        console.log(err)
    }
}
