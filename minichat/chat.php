<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div class="contenu">
        <h1>SUPER CHAT</h1>
        <div class="chat">
            <div class="messages">
 
            </div>
            <form method="post" action="js/handler.php?action=set" id="form">
                <input type="text" name="author" id="author" placeholder="votre nom">
                <!-- <textarea id="text" name="text" placeholder="votre message" cols="50" rows="1"></textarea>
                --> 
                <input type="text" id="text" name="text" placeholder="votre message">
                <button type="submit" id="submit" >envoyer</button>
            </form>
        </div>
    </div>
    
    <script src="js/chat.js"></script>
</body>
</html>