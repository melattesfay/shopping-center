/*global $*/

$("#cartpicture").click(function(){
    window.location = "../cart/cart.html";

});

$("#logo").click(function(){
    window.location = "../homepage.html";
});

var clicks = 0;
function onClick() {
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
}




  var data = getCatalog();
    data.forEach(function(item) {
        console.log(item.name);
    });

$('body').on('click', '.text', function(e) {
	console.log(e);
	Form();
    var parentDiv = $(e.target).parent();
	var image_url = parentDiv.find('img.items')[0].src;
    var divData = JSON.parse(parentDiv.attr("itemData"));
	$(".popup").empty();
    $("#infoDiv").empty();
    $("#buttonDiv").empty();
	$(".popup").append("<img class='popupimage1' src=" + image_url + ">");

   $("#infoDiv").append("<h1 class='itemTitle'>" + divData.name + "</h1>");
    $("#infoDiv").append("<h4 class='itemDesc'>" + divData.description + "</h4>");


    divData.variations.forEach(function(variation){
        var buttonVariation = $("<button class='variationBtn'>" + variation.name + " $" + variation.price +  "</button>");
            buttonVariation.attr("itemId", variation.item_id);
            buttonVariation.attr("name", variation.name);;
            buttonVariation.attr("sku", variation.sku);
            buttonVariation.attr("price", variation.price);
            $("#buttonDiv").append(buttonVariation);
            $(buttonVariation).click(function(){
                onClick();
                closeForm();
            });
    });



});
window.onload = function testToAppendImg(){
    $(".content").empty();
    $.ajax({
        url: "../api/api.json",
        method: "GET",
        success: function(response){
            response.forEach(function(item){

			var newDiv = $("<div class='imgDiv1' class='itemContainer'></div");
            //give data attr to div so we can store the items data on the div and then use it later
				newDiv.append("<img class='items' src='" + item.image_url + "'>");
				newDiv.append("<div class='overlay'></div");
				newDiv.append("<div class='text'>" + "View Details" + "</div>");
                newDiv.attr("itemData", JSON.stringify(item));
				$('.content').append(newDiv);


            });

        }

    });
}
function  variationButtons(){
    $.ajax({
        url: "../api/api.json",
        method: "GET",
        success: function(response){
            response.forEach(function(item){
                item.variations.forEach(function(variation){

                    $(".info").append("<button class='testing'> testing </button>")


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

function closeForm(){
    $("body").css("background", "white");
    $("#myForm").hide();
    $("#myDIV").show();
}


$(".text").click(function(){
    Form();
});

$(".close-button").click(function(){
    closeForm();
});

/*
*/
$("#addCart").click(function(){
    $("body").css("background", "white");
    $("#myForm").hide();
    $("#myDIV").show();
    onClick();

});

/*
*/

function sendData(){
    $.ajax({
        url: "../api/api.json",
        method: "GET",
        success: function(response){
            response.forEach(function(item){
                localStorage.setItem("name", item.name);
            });
        }
    });
}
