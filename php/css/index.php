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
            header('Location: second-form.php');
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
            <div class="registration">
                <h1>GAME OF THRONES</h1>
                <form id="first-section-submit" action="<?php $_SERVER['REQUEST_URI'] ?>" method="POST">
                    <label for="userEmail">Enter your email</label>
                    <span class ="warning" style="color: red; font-size: 15px; display: flex;"><?php echo $emailErr; ?></span>
                    <input  type="text" 
                            id="userEmail" 
                            name="email" 
                            placeholder="arya@westeros.com">

                    <label for="userPassword">Choose secure password</label>
                    <p class="caution">Must be at least 8 characters</p>
                    <span class ="warning" style="color: red; font-size: 15px"><?php echo $passErr; ?></span>
                    <input id="userPassword" 
                            type="password" 
                            name="password"
                            placeholder="password">

                    <div class="confirmation">
                        <input type="checkbox" id="remember">
                        <label for="remember">Remember me</label>
                    </div>
                    <input type="submit" name ="submit" value="Sign Up" class="button" id="submit_2"></p>
                </form>
            </div>
        </section>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
        <script src="js/slippry.min.js"></script>
        <script src="js/jquery.nice-select.js"></script>
        <script src="js/main.js"></script>
    </body>
</html>