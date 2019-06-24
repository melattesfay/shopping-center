/*global $*/

$("#cartBtn").click(function(){
    window.location = "cart.html";

});

$("#logo").click(function(){
    window.location = "homepage.html";
});



    var data = getCatalog();
    data.forEach(function(item) {
        console.log(item.name);
    });
    /*
    $.ajax({
        url: "../api/api.json",
        method: "GET",
        success: function(response){
            $("#testDiv").text(response[0].name);
        }

    });
    */


$("#test3").click(function(){
    $(".content").empty();
});

$("#test2").click(function(){
    testToAppendImg();

});

function testToAppendImg(){

    $.ajax({
        url: "../api/api.json",
        method: "GET",
        success: function(response){
            response.forEach(function(item){
            $(".content").append("<div class='imgDiv1' id='" + item.name + "Container'></div");
            $("#" + item.name + "Container").append("<img class='items' id='" + item.name + "Img' src='" + item.image_url + "'>");
            $("#" + item.name + "Container").append("<div class='overlay' id='" + item.name + "Overlay'></div");
            $("#" + item.name + "Overlay").append("<div class='text' id='" + item.name + "Text'>" + "View Details" + "</div>");





        });

            /*
            $(".content").append("<div class='imgDiv1'></div>");
            $(".imgDiv1").append("<img class='items' src=" + response[0].image_url + ">")
            $(".imgDiv1").append("<div class='overlay'></div>");
            $(".overlay").append("<div class='text'> </div>");
            $(".text").append("View Details");
            */
        }

    });
}


function Form() {
    $("#myDIV").hide();
    $("#myForm").css("display", "block");
    $("#myForm").show();
}


$(".text").click(function(){
    Form();
});

$("#close-button").click(function(){
    $("body").css("background", "white");
    $("#myForm").hide();
    $("#myDIV").show();

});
