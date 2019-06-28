$("#backBtn").click(function(){
    window.history.back();
});

$("#logo").click(function(){
    window.location = "../homepage.html";
});

$("#checkout").click(function(){
    window.location = "../payment/payment.html"
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
            var prices = [];
            var totalPrice = 0;
            var itemIndex = [];
            function updateTotalPrice(){
                for (var i = 0; i < prices.length; i++) {
                   totalPrice += prices[i];
                }
            }

            var dataStorage = [
                {
                "numOfItems": 1,
                "pricePerItem": 2.25,

            }

            ];

            $("#numOfQuan").append(numOfItems);
            response.forEach(function(item){
                itemIndex.push(item.name);
                $("#nameCategory").append("<h3 id=" + item.name + ">" + item.name + "</h3>");
                $("#" + item.name).css("color", "red");
                $("#quantityCategory").append("<div id='" + item.name + "Div' " + "class='quantityTest'></div>");
                $("#" + item.name + "Div").append("<button id='" + item.name + "Minus'>" + "-" + "</button>");
                $("#" + item.name + "Div").append("<input value='1' id='" + item.name + "Input'>");
                $("#" + item.name + "Div").append("<button id='" + item.name + "Plus'>" + "+" + "</button>");
                //price = parseFloat(item.variations[0].price) + parseFloat(price);//
                $("#priceCategory").append("<h3 id='" + item.name + "Price' class='price'>" + item.variations[0].price + "</h3>");

                //$("#numOfTotal").empty();//
                //$("#numOfTotal").append(price);//
                var currentNum = 1;
                $("#" + item.name + "Plus").click(function(){
                    numOfItems = numOfItems + 1;
                    currentNum = currentNum + 1;
                    //dataStorage[0].numOfItems = dataStorage[0].numOfItems + 1;//
                    //price = parseFloat(price) + parseFloat(item.variations[0].price);//
                    $("#" + item.name + "Input").val(currentNum);
                    $("#numOfQuan").empty();
                    $("#" + item.name + "Price").empty();
                    $("#numOfTotal").empty();
                    $("#numOfQuan").append(numOfItems);
                    prices.push(item.variations[0].price);
                    prices[0] = prices[0] + item.variations[0].price;
                    $("#" + item.name + "Price").append(prices[0]);
                    $("#numOfTotal").append(prices[0]);

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

/*
moving data tests
*/
/*
function getData(){
    $.ajax({
        url: "../api/api.json",
        method: "GET",
        success: function(response){
            if(local.Storage.getItem("clicked") === true){
                $("#content").append(localStorage.getItem("name"));
            }else if(localStorage.getItem("clicked") === false){
                $("#content").append("False");
            }

        }

    });
}
*/



/*
*/