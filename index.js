$("#loginButton").click(function () {
    // alert("hello")
    var password1 = $("#pass1").val();
    var password2 = $("#pass2").val();

    if(password1 != "" && password2 != ""){
        if(password1 == password2){
            alert("succesfully login")
        } else {
            alert("password mismatched")
        }
    }else{
        alert("Please enter password")
    }

})