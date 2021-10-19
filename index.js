import * as wasm from "jdrp-wasm";
import * as Ui from "./UI/ui.js"

Ui.UI();

window.addEventListener('load', () => {
    const progress = document.getElementById("xp_bar");
    RPGUI.set_value(progress, wasm.xp_state());
  }, false);

