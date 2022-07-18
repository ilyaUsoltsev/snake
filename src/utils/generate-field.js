import { BOX_SIZE } from "../constants";

export const generateField = (dimention) => {
    const field = document.createElement('div');
    field.id = 'field';
    field.style.gridTemplateColumns = `repeat(${dimention}, ${BOX_SIZE}px)`
    for(let i=0; i<dimention; i++) {
        for(let j=0; j<dimention; j++) {
            const box = document.createElement('div');
            box.style.width = `${BOX_SIZE}px`;
            box.style.height =`${BOX_SIZE}px`;
            box.id =`${i}_${j}`;
            field.appendChild(box);
        }
    }
    document.body.append(field);
}  