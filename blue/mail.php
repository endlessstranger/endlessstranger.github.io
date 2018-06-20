<!DOCTYPE html> 
<html>
<head>
<meta charset="utf-8"/>
</head>
<body>

 
<?php   

$name= $_POST[name];     //возможно переменную нужно взять в ' ' если требует сервер
$mail= $_POST[mail];       
$mess= $_POST[mess];       

$from="LandingPage <cup@xameleon.by>";  // в письме будет указано "от кого"
 
$subject = "Message from my landing page";  
$message =  "Name - " . $name . "\nMail - " . $mail. "\nMessage - " . $mess; 
  

$headers = 'Content-type: text/plain; charset="utf-8"'; // кодировка письма
$headers .= "MIME-Version: 1.0\r\n";

$headers = "From: " . $from . "\r\n";
$headers .= "Reply-To: " . $from . "\r\n"; 
  
$to = "senk-182@mail.ru"; //Здесь укажите свой адрес
   
$send = mail ( $to, $subject, $message, $headers);

?>


</body>
</html>