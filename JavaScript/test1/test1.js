var result=document.querySelector('');
var xhr=new XMLHttpRequest()
xhr.open('get', './donnees.txt');
xhr.onreadystatechange=function (){
    if (xhr.readyState==4 && xhr.status==200){
        result.textContent=xhr.responseText;
    }
    else{
        result.textContent="quelque chose n'a pas marche !!!";
    }
}
xhr.send(null); 
setTimeout(function (){
    xhr.abort();
}, 120000);
