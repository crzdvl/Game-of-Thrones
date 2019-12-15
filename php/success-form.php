<?php

    session_start();

    $email = $_SESSION['email'];

    if(empty($_SESSION['email']) || empty($_SESSION['pass'])
        || empty($_SESSION['name']) || empty($_SESSION['house'])
        || empty($_SESSION['comment']) || checkFor($email)){
        $_SESSION = array();
    } else {
        uploadTheUserData();
    }

    function uploadTheUserData() {
        $path_to_file = './database/'.$_SESSION['email'].'.json';
        $userData = array(
            "name" => $_SESSION['name'],
            "house" => $_SESSION['house'],
            "comment" => $_SESSION['comment'],
            "password" => $_SESSION['pass']
        );
        file_put_contents($path_to_file,json_encode($userData));
    }

    function checkFor($email) {
        $path_to_file = './database/'.$email.'.json';
        if(file_exists($path_to_file)) {
            return true;
        } else {
            return false;
        }    
    }

?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <link href="https://fonts.googleapis.com/css?family=EB+Garamond|Open+Sans&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="css/nice-select.css">
        <link rel="stylesheet" href="css/slippry.css" />
        <link rel="stylesheet" href="css/style.css">
        <title>GAME OF THRONES</title>
    </head>
    <body>
        <section class="contact_form">
            <div class="screen_server">
                <ul id="sliders">
                    <li class="z-slide-item">
                        <img src="img/Stark of Winterfell.jpg" alt="1" class="slide-img">
                    </li>
                    <li class="z-slide-item">
                        <img src="img/Targaryen of King's Landing.jpg" alt="2" class="slide-img">
                    </li>
                    <li class="z-slide-item">
                        <img src="img/Tully of Riverrun.jpg" alt="3" class="slide-img">
                    </li>
                    <li class="z-slide-item">
                        <img src="img/Tyrell of Highgarden.jpg" alt="4" class="slide-img">
                    </li>
                </ul>
             </div>
            <div class="success-form">
                <h1>GAME OF THRONES</h1>
                <p>Form is filled successfully</p>
                <svg class="checkmark"
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 52 52">
                        <circle class="checkmark__circle"cx="26" cy="26" r="25" fill="none"/>
                                <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                </svg>
                <a href="index.php">Main page</a>                    
            </div>
        </section>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
        <script src="js/slippry.min.js"></script>
        <script src="js/jquery.nice-select.js"></script>
        <script src="js/main.js"></script>
    </body>
</html>