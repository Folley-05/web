function Tache(key, nom){
    check=document.createElement('input');
    label=document.createElement('label');
    bouton=document.createElement('button');
    check.type='checkbox';
    check.className='check';
    check.name=key;
    bouton.name=key;
    bouton.className='btSup';
    label.textContent=nom;

    var inserer=function() {
        var princ=document.querySelector('#principale');
        var div=document.createElement('div');
        div.appendChild(check);
        div.appendChild(label);
        div.appendChild(bouton);
        princ.appendChild(div);
    };

}
export {Tache as default};