import Tache from  '../modules/Tache.js';
alert(Tache);

var ht=document.getElementsByTagName('html');

var bd=document.createElement('body');
ht[0].appendChild(bd);
//creation du titre
var titre=document.createElement('h1');
titre.textContent="implementation of task list";
bd.appendChild(titre);
//creation du contenu
var corps=document.createElement('div');
corps.id='coprs';
bd.appendChild(corps);
var navi=document.createElement('div');
navi.id='nav';
var princ=document.createElement('div');
princ.id="principale";
var popup=document.createElement('div');
popup.id="taskadd";
popup.className="notdisplay";
corps.appendChild(navi);
corps.appendChild(princ);
corps.appendChild(popup);

//remplissage du nav
var bt1=document.createElement('button');
var bt2=document.createElement('button');
var bt3=document.createElement('button');
var bt4=document.createElement('button');
bt1.textContent="New task";
bt1.className="btn ajout";
bt2.textContent="clear list";
bt2.className="btn vider";
bt3.textContent="check all";
bt3.className="btn checkall";
bt4.textContent="uncheck all";
bt4.className="btn uncheckall";
navi.appendChild(bt1);
navi.appendChild(bt2);
navi.appendChild(bt3);
navi.appendChild(bt4); 

//remplissage du princ

//remplissage du popup
var titre2=document.createElement('h2');
titre2.textContent="Nouvelle la tache";
popup.appendChild(titre2);
var task=document.createElement('input');
task.type="text";
task.id="task";
task.placeholder="libelle de la tache";
popup.appendChild(task);
var bt5=document.createElement('button');
bt5.textContent="Enregistrer";
bt5.className="ok";
popup.appendChild(bt5);
var bt6=document.createElement('button');
bt6.textContent="annuler";
bt6.className='annuler';
popup.appendChild(bt6);
alert('ok')




