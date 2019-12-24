<?php

    session_start();

    if(empty($_SESSION['email']) || empty($_SESSION['pass'])){
        header('Location: index.php');
    }

    $nameErr = $houseErr = $commentErr = '';
    $name = $_POST['name'];
    $house = $_POST['houses'];
    $comment = $_POST['comment'];

    if($_SERVER["REQUEST_METHOD"] == "POST") {
        $nameErr = validationName($name);
        $houseErr = validationHouse($house);
        $commentErr = validationComment($comment);

        if($emailErr == '' && $passErr == '' && $commentErr == ''){
            saveSessions();
            header('Location: success-validation.php');
        }

    }

    function validationName($name) {
        if(empty($name)){
            return '* name is required';
        } else {
            $regexp = '/^[\w]+$/';
            return preg_match($regexp, $name) ? '' : '* name is not valid';
        }
    }

    function validationHouse($house) {
        if($house == "Select House"){
            return '* select house is required';
        }

        switch ($house) {
            case "Select House":
                return '* select house is required';
                break;
            case "Stark of Winterfell":
                break;
            case "Targaryen of King's Landing":
                break;
            case "Tully of Riverrun":
                break;
            case "Tyrell of Highgarden":
                break;
            default:
                return '* you need choose house of the filed';
        }
    }

    function validationComment($comment) {
        if(empty($comment)){
            return '* comment is required';
        } else {
            $regexp = '/^[\w .,]+$/';
            return preg_match($regexp, $comment) ? '' : '* comment is not valid';
        }
    }

    function saveSessions() {
        if (isset($_POST['submit'])) { 
            $_SESSION['name'] = $_POST['name'];
            $_SESSION['house'] = $_POST['houses'];
            $_SESSION['comment'] = $_POST['comment'];
        } 
    }

    require('templates/second-form.php');

?>