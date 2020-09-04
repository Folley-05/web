import * as controls from './controls.js';
function Time(){
    this.min=0;
    this.sec=0
}

function format(a, b){
    if(a<10){
        a='0'+a;
    }
    if(b<10){
        b='0'+b;
    }
    return a+':'+b;
}
function config(){
var time=new Time();
var start=document.querySelector('.start'),
lap=document.querySelector('.lap'),
stop=document.querySelector('.stop'),
reset=document.querySelector('.reset'),
chrono=document.querySelector('.chrono');
var montre=document.querySelector('.montre');
var startId;
chrono.textContent='00:00';

start.onclick=function (){startId=setInterval(function (){ time=controls.starter(time, chrono); console.log('ok'); }, 995);};
stop.onclick=function (){
    clearInterval(startId);
    start.textContent='CONTINUE';
};
reset.onclick=function (){
    controls.reset(time, chrono, montre, start, startId);
}
lap.onclick=function (){controls.laper(time, montre);}
alert('ok');
}

export {format, config}