<?php

    session_start();

    $emailErr = $passErr = '';
    $email = $_POST['email'];
    $pass = $_POST['password'];

    if($_SERVER["REQUEST_METHOD"] == "POST") {
        $emailErr = validationEmail($email);
        $passErr = validationPass($pass);

        if($emailErr == '' && $passErr == ''){
            saveSessions();
            header('Location: second-form-validation.php');
        }
    }

    function validationEmail($email) {
        if( empty($email)) {
            return '* email is required';
        } else if(!filter_var($email, FILTER_VALIDATE_EMAIL) ) {
            return '* your email is not valid';
        } else if (checkFor($email)){
            return '* your email is already located in database';
        }
    }

    function checkFor($email) {
        $path_to_file = './database/'.$email.'.json';
        if(file_exists($path_to_file)) {
            return true;
        } else {
            return false;
        }    
    }

    function validationPass($pass) {
        if(empty($pass)){
            return '* password is required';
        } else {
            $regexp = '/^\S*(?=\S{8,})\S*$/';
            return preg_match($regexp, $pass) ? '' : '* password must be 8 or more characters length';
        }
    }

    function saveSessions() {
        if (isset($_POST['submit'])) { 
            $_SESSION['email'] = $_POST['email'];
            $_SESSION['pass'] = $_POST['password'];
        } 
    }

    require('templates/first-form.php');

?>