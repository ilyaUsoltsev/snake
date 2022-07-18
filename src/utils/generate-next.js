import { DIMENTION, STATE } from "../constants";

export const removeCurrentNext = () => {
  if (STATE.nextPosition) {
    const prevEl = document.getElementById(STATE.nextPosition);
    prevEl.classList.remove("next");
  }
};

export const generateNext = () => {
  const i = Math.floor(Math.random() * DIMENTION);
  const j = Math.floor(Math.random() * DIMENTION);
  const next = `${i}_${j}`;
  if (STATE.boxes.includes(next)) {
    generateNext();
  } else {
    const nextEl = document.getElementById(next);
    nextEl.classList.add("next");
    STATE.nextPosition = next;
    STATE.next = false;
  }
};
