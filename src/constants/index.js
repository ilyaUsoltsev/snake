export const DIMENTION = 15;
export const BOX_SIZE = 40;
export const INTERVAL = 200;

export const DIRECTIONS = {
  right: "RIGHT",
  left: "LEFT",
  up: "UP",
  down: "DOWN",
  current: "RIGHT",
  setDirection: function (direction) {
    this.current = direction;
  },
};
export const DIRECTION_INIT = DIRECTIONS.right;

const getInitBoxes = () => [`${Math.floor(DIMENTION / 2)}_0`];

export const setInitState = () => {
  STATE.boxes = getInitBoxes();
  DIRECTIONS.setDirection(DIRECTION_INIT);
  STATE.next = true;
  STATE.nextPosition = undefined;
  STATE.toAdd = 0;
  STATE.gameOver = false;
  STATE.gameOverMessage = "GAME OVER!";
};

export const STATE = {
  boxes: getInitBoxes(),
  next: true,
  nextPosition: undefined,
  toAdd: 0,
  gameOver: false,
  gameOverMessage: "GAME OVER!",
};
