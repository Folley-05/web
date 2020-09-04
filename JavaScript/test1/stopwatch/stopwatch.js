import {config} from './manage.js';
config();

/*import * as controls from './controls.js';
var start=document.querySelector('.start'),
lap=document.querySelector('.lap'),
stop=document.querySelector('.stop'),
reset=document.querySelector('.reset'),
chrono=document.querySelector('.chrono');
var montre=document.querySelector('.montre');
var startId;
chrono.textContent='00:00';

start.onclick=function (){startId=setInterval(function (){ controls.starter(sec, min, chrono); console.log('ok'); }, 995);};
stop.onclick=function (){
    clearInterval(startId);
    start.textContent='CONTINUE';
};
reset.onclick=function (){
    controls.reset(sec, min, chrono, montre, start, startId);
}
lap.onclick=function (){controls.laper(sec, min, montre);}
alert('ok');*/