npm init -y  => Ye command ek Node.js project initialize karti hai aur automatically package.json file create ho jati hai.
today in class we get to now about basic of server and what is the server there are major 4 things
processor => Processing aur computation ka kaam karta hai.
ram => Temporary memory hoti hai jisme running applications ka data store hota hai.
storage => Permanent data store karne ke liye (HDD / SSD).

operaing system => System ko manage karta hai (Linux, Windows Server, etc).

what is npm package
npm package is the code written by a developer that push on npm platform that all other developer used that line of code 
NPM package ek code module hota hai jo kisi developer ne likha hota hai aur NPM platform par publish kiya hota hai.
Dusre developers us code ko install karke apne project me use kar sakte hain.

cat me 
package.json - Ye file project ki dependencies aur metadata batati hai.
Isme project ka name, version, scripts, dependencies wagaira hota hai.

package lock=json   -e file exact dependency tree aur install flow batati hai.
Ye ensure karti hai ki sab developers ke system me same version packages install ho.

server create 
server start
server outcome

nodemon - it helps to not restart after doing any changes if not use the command npx nodemon filename then you have to manually did the stop and start the server


api - a set of rules and protocols allowing different software applications to communicate, share data, and interact
API ek set of rules aur protocols hota hai jo different software applications ko:
communicate karne
data share karne
interact karne
me help karta hai.

rest api - it is an architectural style for designing networked applications that uses standard HTTP methods to access and manipulate data
REST API ek architectural style hai jo networked applications design karne ke liye use hoti hai.
Ye HTTP methods use karke data ko access aur manipulate karti hai.

Method
POST - server pr new data CREATE req aata hai req.body se
GET - server se kuch data fetch krne ya mangwana hai
DELETE - server pr kuch delete ho
PATCH - server pr data already tha aur wo update ho gaya 

REST ke 2 Important Rules

HTTP / HTTPS protocols communication ke liye use hote hain.
HTTP methods (GET, POST, DELETE, PATCH) use hote hain
http and https rule for communication
method

postman ->
Postman ek tool hai jisse hum:
APIs test kar sakte hain
requests bhej sakte hain
server responses check kar sakte hain

