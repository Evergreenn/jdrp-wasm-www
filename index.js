import * as wasm from "jdrp-wasm";
import * as Ui from "./UI/ui.js"
import * as D from "./D&D/D&D.js";

Ui.UI();
D.DandD();

window.addEventListener('load', () => {
    const progress = document.getElementById("xp_bar");
    RPGUI.set_value(progress, wasm.xp_state());
  }, false);


