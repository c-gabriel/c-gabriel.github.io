<?php

$name = $_POST["name"];
$email = $_POST["email"];
$subject = $_POST["subject"];
$message = $_POST["message"];
$recipient = $_POST["recipient"];

 // monta o e-mail na variavel $body
$body = "===================================" . "\n";
$body = $body . "SITE - CONTATO" . "\n";
$body = $body . "===================================" . "\n\n";
$body = $body . "Nome: " . $name . "\n";
$body = $body . "Email: " . $email . "\n";
$body = $body . "Mensagem: " . $message . "\n\n";
$body = $body . "===================================" . "\n";

// envia o email
if(mail($recipient, "SITE - " . $subject , $body, "From: $email\r\n")) : echo "A mensagem de e-mail foi enviada para " . $recipient;
else : echo "Erro no envio.";
endif;

?>