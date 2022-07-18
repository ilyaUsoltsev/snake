import { DIMENTION, STATE } from "../constants"

export const checkGameOver = () => {
    const [i,j] = STATE.boxes[0].split('_');
    if (parseInt(i) < 0 || parseInt(i) >= DIMENTION) return true;
    if (parseInt(j) < 0 || parseInt(j) >= DIMENTION) return true;
    return false;
}