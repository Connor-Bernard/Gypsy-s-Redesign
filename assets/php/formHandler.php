<!--
 - Copyright (c) 2022
 -
 - @summary Form Handler
 - @author Connor Bernard <connorbernard@berkeley.edu>
 -
 -->
<?php
$user_name = $_POST["name"];
$user_email = $_POST["email"];
$subject = $_POST["subject"];
$message = $_POST["message"];
$email_from = "connorbernard@berkeley.edu";
$email_subject = "Gypsy's: $subject";
$email_body = "User: $user_name\nUser email: $user_email\nMessage: $message\n";
$sent = @mail("connorbernard@berkeley.edu", $email_subject, $email_body);
header("Location: ../../contact.html?submitted=$sent");
?>
