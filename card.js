document.body.style.margin = "0";
document.body.style.backgroundColor="hsl(217, 54%, 11%)";
document.body.style.fontFamily = "Outfit, san-serif";
document.body.style.fontSize = "18px";

//wrapper
let wrapper = document.createElement("div");
wrapper.id = "wrapper";
wrapper.style.margin = "0 auto";
wrapper.style.maxWidth = "1440";
wrapper.style.display = "flex";
wrapper.style.flexWrap = "wrap";
wrapper.style.justifyContent = "space-around";
wrapper.style.margin = "50px";
wrapper.style.alignItems = "center";
wrapper.style.verticalAlign = "middle";

function createCard() {


//card

let card = document.createElement("div");
card.className = "card";
card.style.padding = "20px 20px";
card.style.margin = "50px 50px";
card.style.borderRadius = "20px";
card.style.backgroundColor = "hsl(216, 50%, 16%)";
card.style.boxShadow = "3px 14px 28px rgba(0,0,0,0.25), 3px 10px 10px rgba(0,0,0,0.22)";

//image
let cardImg = document.createElement("img");
cardImg.className = "card-image";
cardImg.src = "./images/image-equilibrium.jpg";
cardImg.style.maxWidth = "300px";
cardImg.style.borderRadius = "10px";
cardImg.style.marginBottom = "17px";


//main-title
let title = document.createElement("h3");
title.className = "card-title";
title.innerText = "Equilibrium #3429";
title.style.margin = "0";
title.style.color = "hsl(0,0%,100%)";
title.style.marginBottom = "17px";

//subtitle
let subtitle = document.createElement("p");
subtitle.className = "card-subtitle";
subtitle.innerText = "Our Equilibrium collection promotes balance and calm.";
subtitle.style.margin = "0";
subtitle.style.maxWidth = "300px";
subtitle.style.color = "hsl(215, 51%, 70%)";
subtitle.style.fontSize = "300";
subtitle.style.lineHeight = "25px";
subtitle.style.marginBottom = "17px";


//
let items = document.createElement("div");
items.style.display = "flex";
items.style.justifyContent = "space=between";

let value = document.createElement("div");
value.className = "card-value";

let psevdoItem = document.createElement("img");
psevdoItem.className = "value-icon";
psevdoItem.src = "./images/icon-ethereum.svg";
psevdoItem.style.marginRight = "5px";


let valueText = document.createElement("p");
valueText.className = "value-text";
valueText.innerText = "0.041 ETH";
valueText.style.margin = "0";
valueText.style.display = "inline-block";
valueText.style.color = "hsl(178,100%,50%)";
valueText.style.fontWeight = "bold";


let timeItems = document.createElement("div");
timeItems.className = "time";
timeItems.style.display = "flex";
timeItems.style.alignItems = "center";
timeItems.style.marginBottom = "17px";

let timeImage = document.createElement("img");
timeImage.className = "time-img";
timeImage.src = "./images/icon-clock.svg";
timeImage.style.marginRight = "5px";

let timeItem = document.createElement("time");
timeItem.className = "time-item";
timeItem.innerText = "3 days left";
timeItem.style.color= "hsl(215,51%, 70%)";

let line =document.createElement("div");
line.borderBottom = "0.1px solid hasl(215, 32%, 27%)";

let user = document.createElement("div");
user.className = "user";
user.style.marginTop = "22px";
user.style.display = "flex";
user.style.alignItems = "center";

let userImg = document.createElement("img");
userImg.className = "avatar";
userImg.src = "./images/image-avatar.png";
userImg.style.maxWidth = "45px";
userImg.style.marginRight = "15px";
userImg.style.border = "2px solid #fff";
userImg.style.borderRadius = "50%";


let userText = document.createElement("span");
userText.className = "user-txt";
userText.innerText = "Creation of";
userText.style.color = "hsl(215,51%, 70%)";
userText.style.textAlign = "center";

let userName = document.createElement("span");
userName.className = "user-name";
userName.innerText = "Jules Wyvern";
userName.style.color = "white";


document.body.appendChild(wrapper);
wrapper.appendChild(card);
card.appendChild(cardImg);
card.appendChild(title);
card.appendChild(subtitle);
card.appendChild(items);
items.appendChild(value);
value.appendChild(psevdoItem);
value.appendChild(valueText);
items.appendChild(timeItems);
timeItems.appendChild(timeImage);
timeItems.appendChild(timeItem);
card.appendChild(line);
card.appendChild(user);
user.appendChild(userImg);
user.appendChild(userText);
userText.appendChild(userName);




}

createCard();
createCard();
createCard();
createCard();
createCard();
createCard();
createCard();
createCard();

alert("Я оцениваю свою работу на 110 баллов");