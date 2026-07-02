<?php

    session_start();
    include("connectionDB.php");

    $data = array();
    if(isset($_POST['delete']) && $_POST['delete'] == "delete" && isset($_POST['searchDelete']) && !empty($_POST['searchDelete'])){
        $nameOfWord = $_POST['searchDelete'];
        $delete = "DELETE FROM dictionary_resource WHERE name = '$nameOfWord'";
        $result = mysqli_query($conn, $delete);
        If($result){
            $data['deleteResult'] = 'The word '.$nameOfWord.' has been successfully deleted from the dictionary';
            unset($_SESSION['nameOfWord']);
            unset($_SESSION['meaningOfWord']);
            $data['success']="true";
        }

    }else{
        $data['noDelete'] = 'The word '.$nameOfWord.' has not been successfully delete from the dictionary';
        $data['failure'] = 'false';

    }
    echo json_encode($data);

?>