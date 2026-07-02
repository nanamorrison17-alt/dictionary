<?php

session_start();
include("connectionDB.php");

$data = array();

if(isset($_POST['nameOfWord']) && !empty($_POST['nameOfWord']) && isset($_POST['meaningOfWord']) && !empty($_POST['meaningOfWord'])){

    $nameOfWord = $_POST['nameOfWord'];
    $meaningOfWord = $_POST['meaningOfWord'];

    $update = "UPDATE dictionary_resource
               SET meaning = '$meaningOfWord'
               WHERE name = '$nameOfWord'";

    if(mysqli_query($conn, $update)){

        $select = "SELECT * FROM dictionary_resource WHERE name = '$nameOfWord'";
        $result = mysqli_query($conn, $select);

        if($result && mysqli_num_rows($result) == 1){
            $row = mysqli_fetch_assoc($result);

            $_SESSION['nameOfWord'] = $row['name'];
            // $_SESSION['meaningOfWord'] = $row['meaning'];
            $_SESSION['update'] = 'Meaning of the word '.$nameOfWord.' has just been updated';
            $data['success'] = "true";

        } else {

            $_SESSION['noUpdate'] ='The word '.$nameOfWord.' meaning is not available to be updated';
            $data['failure'] = "false";
        }

    } else {

        $data['failure'] = "false";
        $data['sql_error'] = mysqli_error($conn);
    }

} else {

    $data['failure'] = "false";
}

echo json_encode($data);

?>