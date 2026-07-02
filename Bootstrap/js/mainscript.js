function submitSearchAjax() {
    var xmlhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");

    xmlhttp.onreadystatechange = function() {
        if(this.readyState === 4 && this.status === 200){
            // console.log("Response:", this.responseText);
            var result = JSON.parse(this.responseText);
            if (result.success === "true"){
                document.getElementById('search').value = result.nameOfWord;
                document.getElementById('searchResult').value = result.meaningOfWord;
                document.getElementById('searchResult').innerHTML = '<div class="row">' +
                                                                        '<div class="col-md-8 col-sm-8">' +
                                                                            '<p style="color: maroon; font-size:18px;">'+result.searchResult+'</p>' +
                                                                        '</div>' +
                                                                        
                                                                        '<div class="col-md-4 col-sm-4">' +
                                                                            '<form>' +
                                                                                '<div class="col-md-12 col-sm-12">' +
                                                                                    '<div class="form-group">' +
                                                                                        
                                                                                        '<button type="button" name="update" class="btn btn-primary btn-md" id="submitUpdate" onclick="openUpdatePage()" >Update</button>' +
                                                                                        
                                                                                        '<button type="button" name="delete" class="btn btn-danger btn-md" id="submitDelete" onclick="deleteAjax()">Delete</button>' +
                                                                                    
                                                                                    '</div>' +
                                                                                '</div>' +
                                                                            '</form>' +
                                                                        '</div>' +
                                                                    '</div>';

                document.getElementById('searchResult').style.display="block";
                document.getElementById('searchImage').style.display="none";
                document.getElementById("searchMessage").innerHTML = "";
                document.getElementById("searchMessage").style.display = "none";


            }else if(result.failure === "false"){
                document.getElementById("searchImage").style.display = "none";
                document.getElementById("searchMessage").innerHTML='<strong> Danger! </strong>'+result.noResult;
                document.getElementById("searchMessage").style.display = "block";
                document.getElementById("searchResult").style.display = "none";
                document.getElementById("searchResult").innerHTML = "";
                
            }else{
                document.getElementById("searchMessage").style.display = "none";
                document.getElementById("searchMessage").innerHTML = "";
                document.getElementById("searchResult").innerHTML = "";
                document.getElementById("searchImage").style.display = '<div class="row">'+'<img src="img/search.jpg" class="col-md-6 col-sm-6" width="400" id="searchImage" style="margin-bottom:50px;">'+'</div>';


            }
        }
    }

    var searchWord = document.getElementById("search").value;

    xmlhttp.open("POST", "config/wordSearch.php");
    xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xmlhttp.send("search=" + searchWord);
}

function createWordAjax(){
    var xmlhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
    xmlhttp.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
            var result = JSON.parse(this.responseText);
            if(result.success == "true"){
                document.getElementById("resultMessage").style.display="block";
                document.getElementById("resultMessage").innerHTML = '<a href= "#" class="close" data-dismiss="alert" aria-label="close">&times;</a> <strong> Success! </strong>'+result.insert;
                setTimeout(function(){
                    location.reload();
                },7000);
            }else if(result.failure=="false"){
                document.getElementById("resultFailure").style.display="block";
                document.getElementById("resultFailure").innerHTML = '<a href= "#" class="close" data-dismiss="alert" aria-label="close">&times;</a> <strong> Danger! </strong>'+result.noResult;
                setTimeout(function(){
                    location.reload();
                },7000);

            }else{
                document.getElementById("resultMessage").innerHTML="";
                document.getElementById("resultMessage").style.display="none";
                document.getElementById("resultFailure").innerHTML="";
                document.getElementById("resultFailure").style.display="none";
            }

        }

    }

    var nameOfWord = document.getElementById("nameOfWord").value;
    var meaningOfWord = document.getElementById("meaningOfWord").value;
    xmlhttp.open("POST", "config/newWord.php");
    xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xmlhttp.send("nameOfWord=" + encodeURIComponent(nameOfWord) +
             "&meaningOfWord=" + encodeURIComponent(meaningOfWord));
}


function deleteAjax(){
    var xmlhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
    xmlhttp.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
            var result = JSON.parse(this.responseText);
            if(result.success == "true"){
                document.getElementById("resultMessage").style.display="block";
                document.getElementById("resultMessage").innerHTML = '<a href= "#" class="close" data-dismiss="alert" aria-label="close">&times;</a> <strong>Success! </strong>'+result.deleteResult;
                setTimeout(function(){
                    location.reload();
                },7000);
            }else if(result.failure=="false"){
                document.getElementById("resultFailure").style.display="block";
                document.getElementById("resultFailure").innerHTML = '<a href= "#" class="close" data-dismiss="alert" aria-label="close">&times;</a> <strong>Danger! </strong>'+result.noDelete;
                setTimeout(function(){
                    location.reload();
                },7000);

            }else{
                document.getElementById("resultMessage").innerHTML='';
                document.getElementById("resultMessage").style.display="none";
                document.getElementById("resultFailure").innerHTML='';
                document.getElementById("resultFailure").style.display="none";
            }

        }

    }
    var searchDelete = document.getElementById("search").value;
        xmlhttp.open("POST", "config/deleteWord.php");
        xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xmlhttp.send("delete=delete&searchDelete=" +searchDelete);

}

function openUpdatePage() {
    window.location.href = "update-word.php";
}

function submitUpdateAjax(){
    var xmlhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
    xmlhttp.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
            var result = JSON.parse(this.responseText);
            if(result.success == "true" || result.failure == "false"){
                window.location.href="index.php";
            }
        }
    }
    var nameOfWord = document.getElementById("nameOfWord").value;
    var meaningOfWord = document.getElementById("meaningOfWord").value;
    xmlhttp.open("POST", "config/submitUpdateWord.php");
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("nameOfWord=" +nameOfWord+ "&meaningOfWord=" + meaningOfWord);


}
