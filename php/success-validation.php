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

    require('templates/success-form.php');

?>