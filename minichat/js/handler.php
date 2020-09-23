<?php ?>
<?php
header("Access-Control-Allow-Origin: *");
header("Content-type: application/json");
//error_reporting(E_ALL);
//ini_set('display_errors', 1);
?>
<?php $con=new PDO('mysql:host=185.98.131.128 ;dbname=dvap1463273', 'dvap1463273', 'ukr49dnvnd'); ?>
<?php 
    if(array_key_exists('action', $_GET)) {
        if($_GET['action']=='set'){
                $author=$_POST['author'];
                $text=$_POST['text'];
                echo $text." ";
                $requete="insert into Messages values(0, '".$text."', '".$author."', '2020-09-11');";
                $con->exec($requete);
                echo "message envoye";
        }
        else {
            try
            {
                
                $reponse=$con->query("select * from Messages");
                /*while( $donnees=$reponse->fetch()) {
                    echo $donnees['author'] ." : ". $donnees['content'] ."  le " . $donnees['datepub']."<br>" ;  
                }*/
                $donnees=$reponse->fetchAll();
                echo json_encode($donnees);
            }
            catch(Exception $e)
            {
                echo "echec de la connexion";
                die ("erreur :" . $e.GetMessage());
            }
                }
    }
    else {
        echo "erreur fatal veuillez redemarrez l'application";
    }

    
?>
