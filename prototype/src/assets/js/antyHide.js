

$(document).ready(function() {
    var x = window.innerWidth;
    console.log(x);

    if(x >= 991 ){
        $("#navbarCollapse").css({"-webkit-transition": " none",
                                 "transition" : "none" });   
    }
});