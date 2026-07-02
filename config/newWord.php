<?php

include("createDatabase.php");
include("connectionDB.php");

$data = array();
if(isset($_POST['nameOfWord']) && !empty($_POST['nameOfWord']) && isset($_POST['meaningOfWord']) && !empty($_POST['meaningOfWord']) ){
    $nameOfWord = $_POST['nameOfWord'];
    $meaningOfWord = $_POST['meaningOfWord'];
    $insertNewWord = "INSERT INTO dictionary_resource(name,meaning)VALUES('$nameOfWord','$meaningOfWord')";
    $result = mysqli_query($conn, $insertNewWord);
    If($result){
        $data['insert'] = 'New word with a '.$nameOfWord.' has just been successfully added in the dictionary';
        $data['success'] = 'true';

    }else{
        $data['noInsert'] = 'New word with a '.$nameOfWord.' has not been successfully added in the dictionary';
        $data['failure'] = 'false';

    }
    
    echo json_encode($data);
}

?>