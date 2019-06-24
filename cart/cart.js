$("#backBtn").click(function(){
    window.history.back();
});
/*var currentVal = 1;
$("button").click(function(){
    currentVal = currentVal + 1;
    $("input").val(currentVal);
});

$("").click(function(){
    currentVal = currentVal - 1;


    $("input").val(currentVal);
});
*/

/*
Need this function to work when "add to cart" button is pressed in the inventory page
*/
$("#testingBtn").click(function(){
    $("#nameCategory").empty();
    $("#quantityCategory").empty();
    $("#priceCategory").empty();
});

$("#testFunction").click(function(){
    makeNewDiv();
});

function makeNewDiv(){
    $.ajax({
        url: "../api/api.json",
        method: "GET",
        success: function(response){
            response.forEach(function(item){
                $("#nameCategory").append("<h3 id=" + item.name + ">" + item.name + "</h3>");
                $("#" + item.name).css("color", "red");
                $("#quantityCategory").append("<div id='" + item.name + "Div' " + "class='quantityTest'></div>");
                $("#" + item.name + "Div").append("<button id='" + item.name + "Minus'>" + "-" + "</button>");
                $("#" + item.name + "Div").append("<input value='1' id='" + item.name + "Input'>");
                $("#" + item.name + "Div").append("<button id='" + item.name + "Plus'>" + "+" + "</button>");
                $("#priceCategory").append("<h3 id='" + item.name + "Price' class='price'>" + item.variations[0].price + "</h3>");
                var currentVal = 1;
                $("#" + item.name + "Plus").click(function(){
                    currentVal = currentVal + 1;
                $("#" + item.name + "Input").val(currentVal);
                });

                $("#" + item.name + "Minus").click(function(){
                    currentVal = currentVal - 1;
                $("#" + item.name + "Input").val(currentVal);
                });
            });

        }

    });
}

var x=price;
var z= x * 2;

document.getElementById("totalNum").innerHTML = z;


/*
*/

$("#delete1").click(function(){
  $("#lineFirst").remove();
  $("#firstLine2").remove();
  $("#firstLine3").remove();
  $("#delete1").remove();
});