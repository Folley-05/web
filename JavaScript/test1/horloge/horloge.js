var heure=document.querySelector('.heure');
var minute=document.querySelector('.minute');
var seconde=document.querySelector('.seconde');
var detail=document.querySelector('.detail')
var date=new Date();
heure.textContent=date.getHours();
minute.textContent=' : '+date.getMinutes();
seconde.textContent=' : '+date.getSeconds();
var details=date.toString().split(' ');
for(var i=0; i<details.length; i++){
    if(i==4){
        continue
    }
    else{
        detail.textContent=detail.textContent+' '+details[i];
    }
}
setInterval(function (){
    var ladate=new Date();
    heure.textContent=ladate.getHours();
    minute.textContent=' : '+ladate.getMinutes();
    seconde.textContent=' : '+ladate.getSeconds();
}, 990);