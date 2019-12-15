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
            header('Location: success-form.php');
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
                
                <form id="second-section-submit" action="<?php $_SERVER['REQUEST_URI'] ?>" method="POST">
                    <p id="description">You've successfuly joined the game.</br>Tell us more about yourself.</p>
                    <label for="userName">Who are you?</label>
                    <p class="caution">Alpha-numeric username</p>
                    <span class ="warning" style="color: red; font-size: 15px; display: flex;"><?php echo $nameErr; ?></span>
                    <input type="text"
                            id="userName"
                            name="name"
                            placeholder="arya">
                    <label for="houses">Your Great House</label>
                    <span class ="warning" style="color: red; font-size: 15px; display: flex;"><?php echo $houseErr; ?></span>
                    <select name="houses" id="houses" value="select">
                        <option id="houses-dropdown-menu" checked value="Select House">Select House</option>
                        <option value="Stark of Winterfell" name="Stark of Winterfell">Stark of Winterfell</option>
                        <option value="Targaryen of King's Landing" name="Targaryen of King's Landing">Targaryen of King's Landing</option>
                        <option value="Tully of Riverrun" name="Tully of Riverrun">Tully of Riverrun</option>
                        <option value="Tyrell of Highgarden" name="Tyrell of Highgarden">Tyrell of Highgarden</option>
                    </select>

                    <p>Your preferences, hobbies, wishes etc.</p>
                    <span class ="warning" style="color: red; font-size: 15px; display: flex;"><?php echo $commentErr; ?></span>
                    <textarea name="comment" 
                              id="comment" 
                              cols="50" 
                              rows="3" 
                              placeholder="I have a long TOKKIL list..."></textarea>

                    <input type="submit" name="submit" value="Save" class="button" id="submit_1"></p>
                </form>
            </div>
        </section>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
        <script src="js/slippry.min.js"></script>
        <script src="js/jquery.nice-select.js"></script>
        <script src="js/main.js"></script>
    </body>
</html>