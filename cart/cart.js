
/*$("#backBtn").click(function(){
    window.history.back();
});

$("#logo").click(function(){
    window.location = "../homepage.html";
});

$("#checkout").click(function(){
    window.location = "../payment/payment.html";
});
*/
/*
window.onload = function makeNewDiv(){
    $("#nameCategory").empty();
    $("#quantityCategory").empty();
    $("#priceCategory").empty();
    $(".firstLine3").empty();
    $.ajax({
        url: "../api/api.json",
        method: "GET",
        success: function(response){
            var numOfItems = 2;
            var prices = [];
            var totalPrice = 0;
            var itemIndex = [];
        //var totalQuntity =
            var startingTotalPrice = response[0].variations[0].price + response[1].variations[0].price;

          //  var burgerPrice = [];
          //  var friesPrice = [];

           // burgerPrice.push(response[0].variations[0].price);
         //   friesPrice.push(response[1].variations[0].price);




            burgerPrice.push(response[0].variations[0].price);
            $("#numOfTotal").append(startingTotalPrice);
            $("#numOfQuan").append(numOfItems);
            response.forEach(function(item){
                itemIndex.push(item.name);

                $("#nameCategory").append("<h3 id=" + item.name + ">" + item.name + "</h3>"); //apending the name of the item
                $("#quantityCategory").append("<div id='" + item.name + "Div' " + "class='quantityTest'></div>"); //apend the plus and minus each time an iten name is append
                $("#" + item.name + "Div").append("<button id='" + item.name + "Minus'>" + "-" + "</button>"); // minus button
                $("#" + item.name + "Div").append("<input value='1' id='" + item.name + "Input'>");
                $("#" + item.name + "Div").append("<button id='" + item.name +  "Plus'>" + "+" + "</button>"); // plus button
                $("#priceCategory").append("<h3>" + item.variations[0].price + "</h3>");


                var currentNum = 1;
                $("#" + item.name + "Plus").click(function(){
                    numOfItems = numOfItems + 1;
                    currentNum = currentNum + 1;
                   $("#" + item.name + "Input").val(currentNum); // changing the number of qantity that are inside the box
                   $("#numOfQuan").empty();  //empty the quantity number
                    //$("#" + item.name + "Price").empty(); // first empty the price
                    //$("#numOfTotal").empty();
                    $("#numOfQuan").append(numOfItems);// append number of quantity
                    burgerPrice.push(burgerPrice[0] + response[0].variations[0].price);
                    burgerPrice.shift();
                    $("#numOfTotal").empty();
                    $("#numOfTotal").append(burgerPrice);
                    //prices.push(item.variations[0].price); //push the price of b
                    //prices.push(item.variations[1].price);// push the price of f
                    //prices[0] = prices[0] + item.variations[0].price; // getting the info of the price of [0] and anding it to the price
                    //$("#numOfTotal").append(prices[0]); // appending the price to the number of total
                });

                $("#" + item.name + "Minus").click(function(){
                    numOfItems = numOfItems - 1;
                    currentNum = currentNum - 1;
                    $("#" + item.name + "Input").val(currentNum);// changes the quantity
                    $("#" + item.fries + "Input").val(currentNum);
                    $("#numOfQuan").empty();
                   // $("#numOfTotal").empty();
                    $("#numOfQuan").append(numOfItems);
                    //prices.push(item.variations[0].price);
                    //prices.push(item.variations[1].price);
                    //prices[0] = prices[0] - item.variations[0].price;
                    //$("#numOfTotal").append(prices[0]);
                });


            });

        }
    });
}

/*$("#delete1").click(function(){
  $("#lineFirst").remove();
  $("#firstLine2").remove();
  $("#firstLine3").remove();
  $("#delete1").remove();
});
*/
/*
var burgerPrice = [];
var friesPrice = [];

 function totalPrice(){
    burgerPrice.push(response[0].variations[0].price);
        $.ajax({
            url: "../api/api.json",
            method: "GET",
            success: function(response){
            $("#BurgerPlus").click(function(){
                burgerPrice.push(burgerPrice[0] + response[0].variations[0].price);
                burgerPrice.shift();
                  $("#numOfTotal").empty();
                  $("#numOfTotal").append(burgerPrice);
            });
            $("#BurgerMinus").click(function(){
                burgerPrice.push(burgerPrice[0] - response[0].variations[0].price);
                burgerPrice.shift();
                $("#numOfTotal").empty();
                $("#numOfTotal").append(burgerPrice);

        });
   }

 });
 }

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

function newDiv(price, name){


var quantityInput= $("<input class='quantity' value='0'>");
    quantityInput.attr("price", price);

var namePlace = $("<h1 class='name'></h1>");
    namePlace.append(name);

var pricePlace = $("<h2 class='price'></h2>");
    pricePlace.append(price);

var newTestDiv = $("<div class='wrapper'> </div>");
    newTestDiv.append(namePlace);
    newTestDiv.append("<button class='minus'> - </button>");
    newTestDiv.append(quantityInput);
    newTestDiv.append("<button  class='plus'> + </button>");
    newTestDiv.append(pricePlace);

    $("#content").append(newTestDiv);
}

window.onload = function loadData(){
    $("#content").empty();
    $.ajax({
        url: "../api/api.json",
        method: "GET",
        success: function(response){
            response.forEach(function(x){
                newDiv(x.variations[0].price, x.name);
            });

        }


    });
}

//testing calculations below
$("body").on('click', 'button.plus', function(e){
    var subTotal = 0;
    var parentDiv = $(e.target).parent();
    var quantityInput = parentDiv.find("input.quantity")[0];
    var currentVal = $(quantityInput).val();
    $(quantityInput).val(++currentVal);









});

$("body").on('click', 'button.minus', function(e){
    var parentDiv = $(e.target).parent();
    var quantityInput = parentDiv.find("input.quantity")[0];
    var currentVal = $(quantityInput).val();

    if(currentVal >= 1){  // can´t go lower than 0
        $(quantityInput).val(--currentVal);


    }else{

    }





});

//melat work section



//melat work section





//andres work section

//andres work section




//end of section that is testing calculations


$("#testbutton").click(function(){
    loadData();

});



/*

*/

