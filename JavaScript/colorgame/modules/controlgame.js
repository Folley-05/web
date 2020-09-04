import * as choiceColor from '../modules/choicecolor.js';
import * as manageGame from '../modules/managegame.js';

function newGame(lv){
    var color=choiceColor.randomColor();
    manageGame.full(color, lv);

}

export {newGame};