/*global $*/

$("#cartBtn").click(function(){
    window.location = "../cart/cart.html";

});

$("#logo").click(function(){
    window.location = "../homepage.html";
});

  var data = getCatalog();
    data.forEach(function(item) {
        console.log(item.name);
    });

window.onload = function testToAppendImg(){
    $(".content").empty();
    $.ajax({
        url: "../api/api.json",
        method: "GET",
        success: function(response){
            response.forEach(function(item){
            $(".content").append("<div class='imgDiv1' id='" + item.name + "Container'></div");
            $("#" + item.name + "Container").append("<img class='items' id='" + item.name + "Img' src='" + item.image_url + "'>");
            $("#" + item.name + "Container").append("<div class='overlay' id='" + item.name + "Overlay'></div");
            $("#" + item.name + "Overlay").append("<div class='text' id='" + item.name + "Text'>" + "View Details" + "</div>");
            $("#" + item.name + "Text").click(function(){
                Form();
                $("#popup").empty();
                $("#popup").append("<img class='popupimage1' src=" + item.image_url + ">");
                $("#itemName").text(item.name);
                $("#itemPrice").text(item.variations[0].name + ": " + "$" + item.variations[0].price);
                $("#itemDesc").text(item.description);
            });


            });
        }

    });
}


function Form() {
    $("#myDIV").hide();
    $("#myForm").css("display", "block");
    $("#myForm").show();
    $("body").css("background", "rgba(0, 0, 0, 0.8)");

}
$(".text").click(function(){
    Form();
});

$("#close-button").click(function(){
    $("body").css("background", "white");
    $("#myForm").hide();
    $("#myDIV").show();

});

