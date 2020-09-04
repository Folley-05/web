
function MonInterface (){
    var princ=document.querySelector('#principale');
    const preparation= function () {
        princ.textContent='';
        if(localStorage.length==0)
        {
            body.textContent="vous n'avez aucune tache"
        }
        else{
            for(i=0; i<localStorage.length; i++){
                var tache=new Tache(localStorage.key(i), localStorage.getItem(localStorage.key(i)));
                tache.inserer();
            }
            
        }
    };
    preparation();

}

