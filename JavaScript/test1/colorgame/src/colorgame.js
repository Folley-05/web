import * as choiceColor from '../modules/choicecolor.js';
import * as manageGame from '../modules/managegame.js';
import * as controlGame from '../modules/controlgame.js';

var newGame=document.querySelector('.new');
var easy=document.querySelector('.easy');
var hard=document.querySelector('.hard');

var lv=100;

var color=choiceColor.randomColor();
manageGame.full(color, lv);
newGame.onclick=function (){
    controlGame.newGame(lv);
}
easy.onclick=function (){
    lv=100;
    controlGame.newGame(lv);
}
hard.onclick=function (){
    lv=50;
    controlGame.newGame(lv);
} 




