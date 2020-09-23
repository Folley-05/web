var display=document.querySelector('.messages'),
send=document.querySelector('#submit'),
xhr=new XMLHttpRequest();


function setData(e){
    e.preventDefault();
    var data=new FormData();
    var text=document.querySelector("#text");
    var author=document.querySelector("#author");
    xhr.open('post', 'js/handler.php?action=set');
    console.log(data)
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
    xhr.send("author="+author.value+"&text="+text.value);
    //xhr.send(data)
    setTimeout(()=>{getData()}, 1000);
    document.querySelector("#author").focus();

}


function getData() {
    xhr.open('get', 'js/handler.php?action=get');
    xhr.onreadystatechange=function (){
        if(this.readyState==4 && this.status==200){
            var messages=JSON.parse(this.responseText);
            console.log(messages);
            display.textContent="";
            for(message of messages){
                var msg=document.createElement('div');
                msg.textContent=message.content+"  ->   de "+message.author+" le  "+message.datepub;
                display.appendChild(msg);
            }
        }
    }
    xhr.send(); 

}
getData();
send.addEventListener('click', function(e){ setData(e) }, false);
document.querySelector("#author").focus();
//setInterval(()=>{getData()}, 2000);
