<?php
//handle unwanted characters or attacks in the post method
if($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = htmlspecialchars($_POST["unsub_email"]);
    if(empty($email)){

    }
    else {
        if(store_dnc($email)) {
            header('Location: unsubscribe_success.html');
        }
        else {
            echo " Could not unsubscribe ";
        }
    }
}

function store_dnc($email) {
    $servername = "localhost";
    $username = "immehubw_root";
    $password = "YfkO)rlpna+*";
    $dbname = "immehubw_profiling";

    $conn = mysqli_connect($servername, $username, $password, $dbname);

    if(!$conn) {
        die("connection failed: " . mysqli_connect_error());

        exit();
    }

    $sql = "INSERT INTO `unsub_list`(`unsub_email`) VALUES ('" . $email . "')";

    if (mysqli_query($conn, $sql)) {
        return true;
      } else {
        return false;
      }
}

?>
