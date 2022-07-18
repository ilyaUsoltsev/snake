import { DIRECTIONS } from "../constants";

export const getNextHead = (head) => {
    if(DIRECTIONS.current === DIRECTIONS.right) {
        let [i,j] = head.split('_');
        j++;
        return `${i}_${j}`
    } else if(DIRECTIONS.current === DIRECTIONS.left) {
        let [i,j] = head.split('_');
        j--;
        return `${i}_${j}`
    } else if(DIRECTIONS.current === DIRECTIONS.up) {
        let [i,j] = head.split('_');
        i--;
        return `${i}_${j}`
    } else if(DIRECTIONS.current === DIRECTIONS.down) {
        let [i,j] = head.split('_');
        i++;
        return `${i}_${j}`
    }
}