<?php
//handle unwanted characters or attacks in the post method
if($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = htmlspecialchars($_POST["unsub_email"]);
    if(empty($email)){

    }
    else {
        store_dnc($email);
    }
}

function store_dnc($email) {
    $servername = "localhost";
    $username = "user";
    $password = "pass";

    $conn = new mysqli($servername, $username, $password);

    if(mysqli_connect_error()) {
        die("connection failed: " . mysqli_connect_error());
    }

}

?>