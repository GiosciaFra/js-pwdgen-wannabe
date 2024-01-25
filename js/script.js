let nome ;
nome = prompt ("What's your name?") 

let surname;
surname = prompt ("What's your surname?")

let favouriteColor;
favouriteColor = prompt ("What's your favourite colour?")

document.getElementById('pwd').innerHTML = `Your password is ${nome}${surname}${favouriteColor}123`