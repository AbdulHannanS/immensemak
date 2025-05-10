<?php
//handle unwanted characters or attacks in the post method
if($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = htmlspecialchars($_POST["unsub_email"]);
    if(empty($email)){

    }
    else {
        store_dnc($email);
    }
    
    header("url=index.html");
}

function store_dnc($email) {
    $servername = "localhost";
    $username = "root";
    $password = "";

    $conn = new mysqli($servername, $username, $password);

    if($conn->connect_error) {
        die("connection failed: " . $conn->connect_error);
    }
    else {

        $stmt = $conn->prepare("INSERT INTO `unsub_list`(`unsub_email`) VALUES (?)");
        $stmt->bind_param("s", $email); 

        $stmt->execute();

        $stmt->close();
        $conn->close();
}

}

?>
