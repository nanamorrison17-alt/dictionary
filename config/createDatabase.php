<?php

    function checkIfDatabaseExists() {
        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbName = "dictionary";
        $conn = mysqli_connect($servername, $username, $password, $dbName);
        if(!mysqli_select_db($conn, $dbName)) {
            $createDatabase = "CREATE DATABASE IF NOT EXISTS $dbName";
            mysqli_query($conn, $createDatabase);
            }
        mysqli_close($conn);
        }

    function checkIfTableExists() {
        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbName = "dictionary";
        $conn = mysqli_connect($servername, $username, $password, $dbName);
        $checkTable = "SELECT 1 FROM dictionary_resource LIMIT 1";
        $result = mysqli_query($conn, $checkTable);
        if($result){
            if($result && mysqli_num_rows($result) == 0){
                $path = "../csv/dictionary.csv";
                $filepath = fopen($path, "r");
                while(!feof($filepath)) {
                    if(!$line = fgetcsv($filepath)) {
                        continue;
                    }
                    $importSQL = "INSERT INTO dictionary_resource VALUES ('" . $line[0] . "', '" . $line[1] . "', '" . $line[2] . "')";
                    mysqli_query($conn, $importSQL);
                }
            }

        } else {
                echo "noExist";
        
        }
    }

    checkIfDatabaseExists();
    checkIfTableExists();


?>