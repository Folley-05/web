import {format} from './manage.js'
function starter(time, c){
    if(time.sec!=59){
        time.sec++;
    }
    else{
        time.sec=0;
        time.min++;
    }
    c.textContent=format(time.min, time.sec);
    console.log(time.sec);
    return time;
}
function laper(time, montre){
    var div=document.createElement('div');
    div.textContent=format(time.min, time.sec);
    montre.appendChild(div);

}
function reset(time, c, montre, start, startId){
    clearInterval(startId);
    time.sec=0;
    time.min=0;
    montre.textContent='';
    c.textContent=format(time.sec, time.min);
    montre.appendChild(c);
    start.textContent='START';
}

export {starter, laper, reset};