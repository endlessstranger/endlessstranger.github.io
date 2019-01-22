<?
if((isset($_POST['email'])&&$_POST['email']!="")&&(isset($_POST['subscribe'])&&$_POST['subscribe']!="")){ 
        $to = 'aborisenko@xbsoftware.by'; 
        $subject = 'Join the Beta program'; 
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Email: '.$_POST['email'].'</p>
                        <p>Recieve newsletter: '.$_POST['subscribe'].'</p>                        
                    </body>
                </html>'; 
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; 
        $headers .= "From: Sender <from@example.com>\r\n"; 
        mail($to, $subject, $message, $headers); 
}
?>