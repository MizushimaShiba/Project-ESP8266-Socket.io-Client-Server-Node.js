<?php include 'config.php';

if (isset($_POST['login'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];
    $sql = "SELECT * FROM tb_user WHERE username = '$username' AND password = '$password'";
    $result = mysqli_query($koneksi, $sql);

    if (mysqli_num_rows($result) > 0) {
        while ($row = mysqli_fetch_assoc($result)) {
            session_start();
            $_SESSION['nama'] = $username;
            header('location:dashboard.php');
        }
    } else {
        echo "    <script> 
        alert('Username atau Password anda Salah, Coba Lagi');     
        window.location = 'index.php';    
        </script>    
        ";
    }
}

if (isset($_POST['register'])) {

    $name = $_POST['name'];
    $username = $_POST['username'];
    $password = $_POST['password'];

    $sql = "INSERT INTO tb_user VALUES(
        '$name',
        '$username',
        '$password'
    )";

    if (mysqli_query($koneksi, $sql)) {
        echo "    
            <script>
                alert('Data Berhasil Ditambahkan');
                window.location = 'index.php';
            </script>
        ";
    } else {
        echo "
            <script>
            alert('Terjadi Kesalahan');
            window.location ='register.php';   
        ";
    }
}


