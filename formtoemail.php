<?php
		$name = $_POST['name'];
		$visitor_email = $_POST['email'];
		$message = $_POST['message'];
		$myemail='leonkipkoech00@gmail.com';
		$to = $myemail;
		$email_subject = "Contact form submission: $name";
		$email_body = "You have received a new message. ".
		" Here are the details:\n Name: $name \n ".
		"Email: $email_address\n Message \n $message";
		$headers = "From: $myemail\n";
		$headers .= "Reply-To: $email_address";
		mail($to,$email_subject,$email_body,$headers);
		//redirect to the 'thank you' page
		header('Location: thanks.html');
?>