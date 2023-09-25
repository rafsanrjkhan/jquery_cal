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

// $("#btn").click(function() {
//     $("#div1").show(2000).hide(2000);
// });
// $("#btn").click(function() {
//     $("#div1").toggle(1000);
// });
// $("#btn").click(function() {
//     $("#div1").fadeOut(2000);
// });
// $("#btn").click(function() {
//     $("#div1").fadeIn(2000).fadeOut(2000);
// });
// $("#btn").click(function() {
//     $("#div1").fadeToggle(2000);
// })
// $("#btn").click(function() {
//     $("#div1").fadeTo(2000, 0.7);
// })
// $("#btn").click(function() {
//     $("#div1").slideUp(2000);
// })
// $("#btn").click(function() {
//     $("#div1").slideDown(2000).slideUp(2000);
// })
// $("#btn").click(function() {
//     $("#div1").animate({opacity:"0.5"},2000);
// })
// $("#btn").click(function() {
//     $("#div1").animate({height:"500px"},2000);
// })
// $("#btn").click(function() {
//     $("#div1").animate({opacity:"0.5"},2000);
// })
$("#btn").click(function() {
    $("#div1").animate({heigth:"300px", width:"900px"},2000);
})