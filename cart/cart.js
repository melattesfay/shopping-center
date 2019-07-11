$("#logo").click(function(){
    window.location = "../assets/index.html";
});
$("#backBtn").click(function(){
    window.history.back();
});


window.onload = function itemVariations(){
      $("#content").empty();
     $.ajax({
        //url: "../api/api.json",
        url: "../api/inventory.php",
        method: "GET",
        dataType: "json",
        success: function(response){

             $.each(response, function(index, item){
                var imageHolder = item.image_url;
                $.each(item.variations, function(index, variation){
                    if(!localStorage.getItem(variation.sku)){
                    localStorage.setItem(variation.sku, 0);

                }
                   newDiv(parseFloat(variation.price), variation.name, imageHolder, variation.sku);


                });

             });
             calPrice();

        }
     });


}


function newDiv(price, name, url, sku){
var imagePlace = $("<img class='itemImg'>");
    imagePlace.attr("src", url);

var quantityInput= $("<input class='quantity' value='" + localStorage.getItem(sku) + "'>");
    quantityInput.attr("price", price);
    quantityInput.attr("sku", sku);

var namePlace = $("<h1 class='name'></h1>");
    namePlace.append(name);
    namePlace.attr("name", name)

var pricePlace = $("<h2 class='price'></h2>");
    pricePlace.append(price);

var testWrapper = $("<div class='quantityWrapper'> </div>");
    testWrapper.append("<button class='minus'> - </button>");
    testWrapper.append(quantityInput);
    testWrapper.append("<button  class='plus'> + </button>");

var newTestDiv = $("<div class='wrapper'> </div>");
    newTestDiv.append(imagePlace);
    newTestDiv.append(namePlace);
    newTestDiv.append(testWrapper);
    newTestDiv.append(pricePlace);


   $("#content").append(newTestDiv);

}

function calPrice(){


  var qTotal = 0;
    var pTotal = 0;

    // find all matching inputs (by class)
    $('input.quantity').each(function(i, q){
        // add the current quantity to the total
        var x = parseInt($(q).val(), 10);
        qTotal = qTotal + x;
        var itemPrice = $(q).attr("price");
        pTotal = parseFloat(pTotal + (x * itemPrice));

  });
    $("#numOfTotal").empty();
    $("#numOfTotal").append(pTotal);
    $("#numOfQuan").empty();
    $("#numOfQuan").append(qTotal);


}


//testing calculations below
$("body").on('click', 'button.plus', function(e){

    var parentDiv = $(e.target).parent();
    var quantityInput = parentDiv.find("input.quantity")[0];
    var currentVal = $(quantityInput).val();
    $(quantityInput).val(++currentVal);
    localStorage.setItem($(quantityInput).attr("sku"), currentVal);
    calPrice();

});



$("body").on('click', 'button.minus', function(e){
    var parentDiv = $(e.target).parent();
    var quantityInput = parentDiv.find("input.quantity")[0];
    var currentVal = $(quantityInput).val();

    if(currentVal >= 1){  // can´t go lower than 0

        $(quantityInput).val(--currentVal);}
    localStorage.setItem($(quantityInput).attr("sku"), currentVal);
calPrice();
});




$("#checkout").click(function(){
    window.location = "../payment/payment.html";
});
//end of section that is testing calculations
