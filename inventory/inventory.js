/*global $*/
$("#backBtn").click(function(){
    window.history.back();
});

$("#cartpicture").click(function(){
    window.location = "../cart/cart.html";

});

$("#logo").click(function(){
    window.location = "../homepage/homepage.html";
});

var clicks = 0;
function onClick() {
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
}




  var data = getCatalog();


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
    $("#infoDiv").append("<h2 class='itemDesc'>" + divData.description + "</h2>");


    $.each(divData.variations, function(index, variation){
        var buttonVariation = $("<button class='variationBtn'>" + variation.name + " $" + variation.price.toFixed(2) +  "</button>");

            buttonVariation.attr("itemId", variation.item_id);
            buttonVariation.attr("name", variation.name);;
            buttonVariation.attr("sku", variation.sku);
            buttonVariation.attr("price", variation.price);
            $("#buttonDiv").append(buttonVariation);

            $(buttonVariation).click(function(e){
                var target = $(e.target);
                var sku = target.attr("sku");
                var count = localStorage.getItem(sku);
                    count++;
                localStorage.setItem(sku, count);
                onClick();
                closeForm();
            });
    });



});
window.onload = function testToAppendImg(){
    $(".content").empty();
    $.ajax({
        //url: "../api/api.json",
        url: "../api/inventory.php",
        method: "GET",
        dataType: "json",
        success: function(response){
            $.each(response, function(index, item){
			var newDiv = $("<div class='imgDiv1' class='itemContainer'></div");
            //give data attr to div so we can store the items data on the div and then use it later
				newDiv.append("<img class='items' src='" + item.image_url + "'>");
				newDiv.append("<div class='overlay'></div");
				newDiv.append("<div class='text'>" + "View Details" + "</div>");
                newDiv.attr("itemData", JSON.stringify(item));
				$('.content').append(newDiv);

                $.each(item.variations, function(index, variation){
                if(!localStorage.getItem(variation.sku)){
                    localStorage.setItem(variation.sku, 0);
                }
                clicks = clicks + parseInt(localStorage.getItem(variation.sku));
                document.getElementById("clicks").innerHTML = clicks;

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





