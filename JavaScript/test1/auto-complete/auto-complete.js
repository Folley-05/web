import {check, change, getData} from './modules.js';
var contenu=document.querySelector('.contenu');

getData();
text.oninput=function (){
    check();
}
contenu.addEventListener('keyup', function (e){ change(e); }, false);
