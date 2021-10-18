import * as wasm from "jdrp-wasm";

// wasm.greet();

const map_button = document.getElementById("map_button");
const map = document.getElementById("map");

const caracter_button = document.getElementById("caracter_button");
const caracter = document.getElementById("caracter");

const bag_button = document.getElementById("bag_button");
const bag = document.getElementById("bag");

map_button.addEventListener("click", (e) => {
    e.preventDefault();
    toogleUi(map.style.display, map, map_button);
});

caracter_button.addEventListener("click", (e) => {
    e.preventDefault();
    toogleUi(caracter.style.display, caracter, caracter_button);
});

bag_button.addEventListener("click", (e) => {
    e.preventDefault();
    toogleUi(bag.style.display, bag, bag_button);
});


const toogleUi = (d, t, b) => {
    if(d == "none"){
        b.classList.add("down");
        t.style.display = "block";
        t.style.zIndex += 10
    }else{
        b.classList.remove("down");
        t.style.display = "none";
        t.style.zIndex -= 10
    }
}

window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
      return;
    }
  
    switch (event.key) {
      case "c":
        toogleUi(caracter.style.display, caracter, caracter_button);
        break;
      case "b":
        toogleUi(bag.style.display, bag, bag_button);
        break;
      case "m":
        toogleUi(map.style.display, map, map_button);
        break;
      default:
        return; 
    }
    event.preventDefault();
  }, true);

const progress = document.getElementById("xp_bar");
RPGUI.set_value(progress, wasm.xp_state());