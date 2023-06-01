<?php 
    $servername = "localhost";
    $username = "root";
    $password = "";
    $database = "ocean-one";

    //membuat koneksi
    $conn = mysqli_connect($servername, $username, $password, $database);

    //cek koneksi
    if (!$conn){
        die("connection failed: " . mysqli_connect_error());
    }

?>