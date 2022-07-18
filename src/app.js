import { DIMENTION, INTERVAL, setInitState, STATE } from "./constants";
import { checkCollisions } from "./utils/check-collision";
import { colorBoxes } from "./utils/color-boxes";
import { eventListeners } from "./utils/event-listeners";
import { generateField } from "./utils/generate-field";
import { generateNext, removeCurrentNext } from "./utils/generate-next";

function main() {
  generateField(DIMENTION);
  setInterval(() => {
    checkCollisions();
    colorBoxes();

    if (STATE.next) {
      removeCurrentNext();
      generateNext();
    }

    if (STATE.gameOver) {
      alert(STATE.gameOverMessage);
      setInitState();
      const nexts = document.getElementsByClassName("next")[0];
      nexts.classList.remove("next");
    }
  }, INTERVAL);
}

document.addEventListener("DOMContentLoaded", main, false);
eventListeners();
