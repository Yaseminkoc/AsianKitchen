const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];


var btns = document.getElementById("buttons");
var btnAll = document.createElement("button");
var btnKorea = document.createElement("button");
var btnJapan = document.createElement("button");
var btnChina = document.createElement("button");
var btnAllClick=false;
var btnKoreaClick=false;
var btnJapanClick=false;
var btnChinaClick=false;
function createButton(innerText, idSend, btnName, btnNameClick){
  btnName.style.color = "black";
  btnName.style.backgroundColor="white";
  btnName.innerHTML = innerText;
  btnName.style.margin = "10px";
  btnName.style.padding = "5px 10px 5px 10px";
  btnName.style.borderRadius="5px";

  btnName.style.id = idSend;
  
  btnName.class ="btn";
  btns.appendChild(btnName);
}

createButton("All", "btnAll", btnAll, btnAllClick);
createButton("Japan", "btnJapan", btnJapan, btnJapanClick);
createButton("Korea", "btnKorea", btnKorea, btnKoreaClick);
createButton("China", "btnChina", btnChina, btnChinaClick);

const koreaMenu = menu.filter(item => item.category === "Korea");
const chinaMenu = menu.filter(item => item.category === "China");
const japanMenu = menu.filter(item => item.category === "Japan");

var items = document.getElementById("items");

function clearScreen(){
 
 items.innerHTML = "";

}
let count=0;

(function () {
 btnAllTasks();
})();

function btnAllTasks() {
 
  clearScreen();
    btnAllClick = true;
    btnChinaClick = false;
    btnJapanClick = false;
    btnKoreaClick = false;
    btnAll.style.borderWidth = "5px";
    btnAll.style.borderColor = "gray";
    btnAll.style.backgroundColor = "white";
    btnAll.style.color = "black";
    btnKorea.style.borderWidth = "0.5px";
    btnKorea.style.borderColor = "black";
    btnJapan.style.borderWidth = "0.5px";
    btnJapan.style.borderColor = "black";
    btnChina.style.borderWidth = "0.5px";
    btnChina.style.borderColor = "black";
 
    menu.forEach(e => {
      var div1 = document.createElement("div");
  
      div1.classList.add("menu-items");
      div1.classList.add("col-lg-6");
      div1.classList.add("col-sm-12");
      items.appendChild(div1);
      var img1 = document.createElement("img");
      img1.src = e.img;
      img1.classList.add("photo");
      div1.appendChild(img1);

      var div2 = document.createElement("div");
      div2.classList.add("menu-info");
      div1.appendChild(div2);

      var title = document.createElement("div");
      title.classList.add("menu-title");
      title.innerHTML= e.title;
      div2.appendChild(title);

      var price = document.createElement("h4");
      price.classList.add("price");
      price.innerHTML=e.price;
      title.appendChild(price);

      var menuText = document.createElement("div");
      menuText.classList.add("menu-text");
      menuText.innerHTML=e.desc;
      div2.appendChild(menuText);
    })
}

btnAll.addEventListener ("click", btnAllTasks );



let count1=0;
btnKorea.addEventListener ("click", function() {
  clearScreen();
 
  btnAllClick = false;
  btnChinaClick = false;
  btnJapanClick = false;
  btnKoreaClick = true;
  btnKorea.style.borderWidth = "5px";
  btnKorea.style.borderColor = "gray";
  btnKorea.style.backgroundColor = "white";
  btnKorea.style.color = "black";
  btnAll.style.borderWidth = "0.5px";
  btnAll.style.borderColor = "black";
  btnJapan.style.borderWidth = "0.5px";
  btnJapan.style.borderColor = "black";
  btnChina.style.borderWidth = "0.5px";
  btnChina.style.borderColor = "black";
  

    koreaMenu.forEach(e => {
      var div1 = document.createElement("div");
     
      div1.classList.add("menu-items");
      div1.classList.add("col-lg-6");
      div1.classList.add("col-sm-12");
      items.appendChild(div1);
      var img1 = document.createElement("img");
      img1.src = e.img;
      img1.classList.add("photo");
      div1.appendChild(img1);

      var div2 = document.createElement("div");
      div2.classList.add("menu-info");
      div1.appendChild(div2);

      var title = document.createElement("div");
      title.classList.add("menu-title");
      title.innerHTML= e.title;
      div2.appendChild(title);

      var price = document.createElement("h4");
      price.classList.add("price");
      price.innerHTML=e.price;
      title.appendChild(price);

      var menuText = document.createElement("div");
      menuText.classList.add("menu-text");
      menuText.innerHTML=e.desc;
      div2.appendChild(menuText);
    })
  
});

btnJapan.addEventListener ("click", function() {
 clearScreen();
  
  btnAllClick = false;
  btnChinaClick = false;
  btnJapanClick = true;
  btnKoreaClick = false;
  btnJapan.style.borderWidth = "5px";
  btnJapan.style.borderColor = "gray";
  btnJapan.style.backgroundColor = "white";
  btnJapan.style.color = "black";
  btnKorea.style.borderWidth = "0.5px";
  btnKorea.style.borderColor = "black";
  btnAll.style.borderWidth = "0.5px";
  btnAll.style.borderColor = "black";
  btnChina.style.borderWidth = "0.5px";
  btnChina.style.borderColor = "black";
  
 
    japanMenu.forEach(e => {
      var div1 = document.createElement("div");
     
      div1.classList.add("menu-items");
      div1.classList.add("col-lg-6");
      div1.classList.add("col-sm-12");
      items.appendChild(div1);
      var img1 = document.createElement("img");
      img1.src = e.img;
      img1.classList.add("photo");
      div1.appendChild(img1);

      var div2 = document.createElement("div");
      div2.classList.add("menu-info");
      div1.appendChild(div2);

      var title = document.createElement("div");
      title.classList.add("menu-title");
      title.innerHTML= e.title;
      div2.appendChild(title);

      var price = document.createElement("h4");
      price.classList.add("price");
      price.innerHTML=e.price;
      title.appendChild(price);

      var menuText = document.createElement("div");
      menuText.classList.add("menu-text");
      menuText.innerHTML=e.desc;
      div2.appendChild(menuText);
    })
  
});



btnChina.addEventListener ("click", function() {
  
  clearScreen();
  btnAllClick = false;
  btnChinaClick = true;
  btnJapanClick = false;
  btnKoreaClick = false;
  btnChina.style.borderWidth = "5px";
  btnChina.style.borderColor = "gray";
  btnChina.style.backgroundColor = "white";
  btnChina.style.color = "black";
  btnKorea.style.borderWidth = "0.5px";
  btnKorea.style.borderColor = "black";
  btnJapan.style.borderWidth = "0.5px";
  btnJapan.style.borderColor = "black";
  btnAll.style.borderWidth = "0.5px";
  btnAll.style.borderColor = "black";

    chinaMenu.forEach(e => {
      var div1 = document.createElement("div");
      
      div1.classList.add("menu-items");
      div1.classList.add("col-lg-6");
      div1.classList.add("col-sm-12");
      items.appendChild(div1);
      var img1 = document.createElement("img");
      img1.src = e.img;
      img1.classList.add("photo");
      div1.appendChild(img1);

      var div2 = document.createElement("div");
      div2.classList.add("menu-info");
      div1.appendChild(div2);

      var title = document.createElement("div");
      title.classList.add("menu-title");
      title.innerHTML= e.title;
      div2.appendChild(title);

      var price = document.createElement("h4");
      price.classList.add("price");
      price.innerHTML=e.price;
      title.appendChild(price);

      var menuText = document.createElement("div");
      menuText.classList.add("menu-text");
      menuText.innerHTML=e.desc;
      div2.appendChild(menuText);
    })
  
});


btnAll.onmouseover = function(){
  if(btnAllClick ==false){
    btnAll.style.backgroundColor ="black";
    btnAll.style.color = "white";
  }
}

btnAll.onmouseout = function(){
  if(btnAllClick ==false){
    btnAll.style.color = "black";
    btnAll.style.backgroundColor="white";
  }
}

btnKorea.onmouseover = function(){
  if(btnKoreaClick ==false){
    btnKorea.style.backgroundColor ="black";
    btnKorea.style.color = "white";
  }
}

btnKorea.onmouseout = function(){
  if(btnKoreaClick ==false){
    btnKorea.style.color = "black";
    btnKorea.style.backgroundColor="white";
  }
}

btnJapan.onmouseover = function(){
  if(btnJapanClick ==false){
    btnJapan.style.backgroundColor ="black";
    btnJapan.style.color = "white";
  }
}

btnJapan.onmouseout = function(){
  if(btnJapanClick ==false){
    btnJapan.style.color = "black";
    btnJapan.style.backgroundColor="white";
  }
}

btnChina.onmouseover = function(){
  if(btnChinaClick ==false){
    btnChina.style.backgroundColor ="black";
    btnChina.style.color = "white";
  }
}

btnChina.onmouseout = function(){
  if(btnChinaClick ==false){
    btnChina.style.color = "black";
    btnChina.style.backgroundColor="white";
  }
}












