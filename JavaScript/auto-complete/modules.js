var sugest=document.querySelector('.sugestions');
var sug=[];
var xhr=new XMLHttpRequest();
var villes=[];
var j=-1;

function check(){
    var reg=new RegExp('^'+text.value, 'i');
    sug=[];
    j=-1;
    sugest.textContent='';
    if(text.value){
        for (var i=0; i<villes.length; i++){
            if(reg.test(villes[i])){
                var sugestion=document.createElement('div');
                sugestion.textContent=villes[i];
                sug.push(sugestion);
                sugest.appendChild(sugestion);
            }
        }
    }
}

function change(e){
    switch (e.keyCode){
        case 38:
            j--;
            if (j>=0){
                sug[j+1].className='';
                sug[j].className='brille';
            }
            else {j=0}
            break;
        case 40:
            j++;
            if (j<sug.length){ 
                if(j)sug[j-1].className='';
                sug[j].className='brille';
            }
            else {j=sug.length-1}
            break;
        case 13:
            if(j==-1)
                if(text.value)
                    alert("ville non valide");
                else
                    alert("veuillez saisir quelque chose");
            else
            alert("vous avez choisi "+sug[j].textContent);
            break
    }
}

function getData(){
    xhr.open('POST', './pays.txt');
    xhr.send(null);
    //xhr.responseType='json';
    xhr.onreadystatechange=function (){
        if(this.readyState==4 && this.status==200){
            villes=JSON.parse(this.response).Cameroun;
            console.log(villes[0]);
        }
        else{
            console.log("quelque chose n'a pas marche");
        }
    }
}

export {check, change, getData}