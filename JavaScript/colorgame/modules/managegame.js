import * as choiceColor from './choicecolor.js';
var blocs=document.getElementsByClassName('div'); 
var verdict=document.querySelector('.verdict');
var couleur=document.querySelector('.couleur');
function check(color, red, green, blue){
    if (red==color.red && green==color.green && blue==color.blue){
        verdict.textContent="CONGRATULATION !!!";
    }
    else{
        verdict.textContent="you loooooose !!!! :{ ";
    }
    
}

function full(color, a){
    var i=choiceColor.rand(0, blocs.length-1, true);
    blocs[i].style="background-color: rgb("+color.red+","+color.green+","+color.blue+");";
    blocs[i].name=color.red+' '+color.green+' '+color.blue;
    couleur.textContent="YOUR COLOR CODE IS  RGB("+color.red+","+color.green+","+color.blue+")";
    for (var j=0; j<blocs.length; j++){
        if (j==i){continue}
        else{
            var color2=choiceColor.randomColor2(color, a);
            blocs[j].style="background-color: rgb("+color2.red+","+color2.green+","+color2.blue+");";
            blocs[j].name=color2.red+' '+color2.green+' '+color2.blue;
        }
    }

    for (var i=0; i<blocs.length; i++){
        blocs[i].onclick=function (){
            var code=this.name.split(' ');
            check(color, code[0], code[1], code[2]);
    
        }
    
    }
    
}

export {check, full};