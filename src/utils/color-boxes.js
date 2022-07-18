import {  STATE } from "../constants";
import { checkGameOver } from "./check-gameover";
import { getNextHead } from "./get-next-head";



export const colorBoxes = () => {
    STATE.boxes = [getNextHead(STATE.boxes[0]), ...STATE.boxes.slice(0, STATE.boxes.length - 1 + STATE.toAdd)];
    STATE.toAdd = 0;
    const isGameOver = checkGameOver();
    if(isGameOver) {
        STATE.gameOver = true;
        return;
    }
    const fieldEl = document.getElementById('field');
    fieldEl.childNodes.forEach(box => box.classList.remove('box-colored'))
    for(const boxId of STATE.boxes) {
        const el = document.getElementById(boxId);
        el.classList.add('box-colored');
    }
}