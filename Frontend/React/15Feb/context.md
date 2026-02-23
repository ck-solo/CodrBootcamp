first we start by making a component
inside the component i make navbar and productcard file
and after that i make page folder inside that there are home and cart file

components
inside the navbar i make the basic layout a logo then text and then after it home cart and icon


page folder
then inside the page folder i make the home file insde that i pass the state that pass the data to the productcard buy using the map i store the data inside the product prop and using the map return the value inside the productcard.

productcard
first i make the basic layout of product like making a div inside that there is a image then title price and two button manually and then i pass the object elem props and use that props elem.title and replace the title price and image from it.

cart
then to target the item i used the props cart inside the app.jsx passing the value from app jsx and using the props drilling concept let it from app then home then setcart inside the productcart

now i make the cart file inside the cart i run the map function on product again and then return the 
cart elem value

