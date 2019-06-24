$("#backBtn").click(function(){
    window.history.back();
});

$("#logo").click(function(){
    window.location = "../homepage.html";
});

$("#checkout").click(function(){
    window.location = "../payment/payment.html"
});

$("#testingBtn").click(function(){
    $("#nameCategory").empty();
    $("#quantityCategory").empty();
    $("#priceCategory").empty();
});

$("#testFunction").click(function(){
    makeNewDiv();
});

window.onload = function makeNewDiv(){
    $("#nameCategory").empty();
    $("#quantityCategory").empty();
    $("#priceCategory").empty();
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
                $("#numOfQuan").text(currentVal);
                });

                $("#" + item.name + "Minus").click(function(){
                    currentVal = currentVal - 1;
                $("#" + item.name + "Input").val(currentVal);
                $("#numOfQuan").text(currentVal);
                });
            });

        }

    });
}




$("#delete1").click(function(){
  $("#lineFirst").remove();
  $("#firstLine2").remove();
  $("#firstLine3").remove();
  $("#delete1").remove();
});