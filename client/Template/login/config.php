<?php

$servername = "localhost";
$username = "root";
$password = "";
$database = "db_login";

// Membuat Koneksi
$koneksi = mysqli_connect($servername, $username, $password, $database);
// Mengecek Koneksi  
if (!$koneksi) {
    die("Connection failed:" . mysqli_connect_error());
}
