import { STATE } from "../constants";

export const checkCollisions = () => {
  if (STATE.nextPosition === STATE.boxes[0]) {
    STATE.next = true;
    STATE.toAdd = 1;
  }

  const headCurrent = STATE.boxes[0];

  if (STATE.boxes.slice(1).includes(headCurrent)) {
    STATE.gameOverMessage = `You have eaten yourself!`;
    STATE.gameOver = true;
  }
};
