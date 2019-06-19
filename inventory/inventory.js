/*global $*/

$("#cartBtn").click(function(){
    window.location = "cart.html";

});

$("#backBtn").click(function() {
    window.history.back();
});

$("#logo").click(function(){
    window.location = "homepage.html";
});

function getName(){

    $.ajax({
        url: "https://c52otmsk20.execute-api.us-west-1.amazonaws.com/dev/inventory",
        method: "GET",
        success: function(response){
            $("#testDiv").text(response.name);
        }

    });
}

$("#test").click(function(){
    getName();

});

$("#test2").click(function(){
    $("#testDiv").text("test");
});