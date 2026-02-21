first sabse phle ek form banaya hu jisme input and textarea banaya hu uske baad button 
fir usme onchange and onclick se input ko target kiya hu aur onsubmit pr eventhandler chalaya hu jisme 
page reload ko roka hu uske andar value fill kra hu 


iske baad usestate banaya hu posts ke naam se aur fir api call kiya hu fetchdata ke naam se
jisme url ko fetch karake data me store kiya hu aur us data ko setposts state me pass kr diya hu

fir uske baad useeffect se rerender ko handle kiya hu ki ek baar hi api hit ho aur baar baar api ko call na krne ho jisme dependency ko blank array kiya hu ki bs ek bar hi call ho api

fir uske baad posts pr map chalega jisme api ke post ka title aur desciption fetch kr rhe hai aur usme ek delete button aur ek edit button banaya hai jiske baad usme ek deletehandler aur ek update handler call kiya hai onclick pr


ek loading state banaya hai jo show hoga referesh krne pr 

removehandler banaya jisme url ko fetch kiya hai aur fir usme ek object banaya hai jisme method ko delete kiya  hai aur  fir setpost ke andar ke post pr fileter chalya hai jisme post ki id ko id se match na krne pr remove handler chal jayega to wo post delete ho jayegi kyunki jab post pr click hoga to condition true hogi post ki id jispe click hua hai uski aur jo post hai dono ki id match hogi 


ek updathandler bnaya hai jisme post paas kiya hai jiske settitle setbody setedit ki value same hai jiski wajah se usme update hojayega when click krenge edit button pr 


