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
            var numOfItems = response.length;
            $("#numOfQuan").append(numOfItems);
            response.forEach(function(item){
                $("#nameCategory").append("<h3 id=" + item.name + ">" + item.name + "</h3>");
                $("#" + item.name).css("color", "red");
                $("#quantityCategory").append("<div id='" + item.name + "Div' " + "class='quantityTest'></div>");
                $("#" + item.name + "Div").append("<button id='" + item.name + "Minus'>" + "-" + "</button>");
                $("#" + item.name + "Div").append("<input value='1' id='" + item.name + "Input'>");
                $("#" + item.name + "Div").append("<button id='" + item.name + "Plus'>" + "+" + "</button>");
                var price = item.variations[0].price;
                $("#priceCategory").append("<h3 id='" + item.name + "Price' class='price'>" + price + "</h3>");
                $("#numOfTotal").append(price);
                var currentNum = 1;
                $("#" + item.name + "Plus").click(function(){
                    numOfItems = numOfItems + 1;
                    currentNum = currentNum + 1;
                    price = price + item.variations[0].price;
                    $("#" + item.name + "Input").val(currentNum);
                    $("#numOfQuan").empty();
                    $("#" + item.name + "Price").empty();
                    $("#numOfTotal").empty();
                    $("#numOfQuan").append(numOfItems);
                    $("#" + item.name + "Price").append(price);
                    $("#numOfTotal").append(price)
                });

                $("#" + item.name + "Minus").click(function(){
                    numOfItems = numOfItems - 1;
                    currentNum = currentNum - 1;
                    price = price - item.variations[0].price;
                    $("#" + item.name + "Input").val(currentNum);
                    $("#numOfQuan").empty();
                    $("#" + item.name + "Price").empty();
                    $("#numOfQuan").append(numOfItems);
                    $("#" + item.name + "Price").append(price);
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
