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
    var item_name = parentDiv.attr('item_name');
	$(".popup").empty();
	$(".popup").append("<img class='popupimage1' src=" + image_url + ">");
});
window.onload = function testToAppendImg(){
    $(".content").empty();
    $.ajax({
        url: "../api/api.json",
        method: "GET",
        success: function(response){
            response.forEach(function(item){
			var newDiv = $("<div class='imgDiv1' class='itemContainer'></div");
				newDiv.append("<img class='items' src='" + item.image_url + "'>");
				newDiv.append("<div class='overlay'></div");
				newDiv.append("<div class='text'>" + "View Details" + "</div>");
				$('.content').append(newDiv);
            //$(".content").append("<div class='imgDiv1' id='" + item.name + "Container'></div");
            //$("#" + item.name + "Container").append("<img class='items' id='" + item.name + "Img' src='" + item.image_url + "'>");
            //$("#" + item.name + "Container").append("<div class='overlay' id='" + item.name + "Overlay'></div");
            //$("#" + item.name + "Overlay").append("<div class='text' id='" + item.name + "Text'>" + "View Details" + "</div>");

				/*
            $("#" + item.name + "Text").click(function(){
                Form();
                $(".popup").empty();
                $(".popup").append("<img class='popupimage1' src=" + item.image_url + ">");
                $("#itemName").text(item.name);
                $("#itemPrice").text(item.variations[0].name + ": " + "$" + item.variations[0].price);
                $("#itemDesc").text(item.description);

            });
			*/


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





/*
testing localStorage
*/

var clicked = false;
$("#addCart").click(function(){
    clicked = true;
    $.ajax({
        url: "../api/api.json",
        method: "GET",
        success: function(response){
            if(clicked === true){
                localStorage.setItem("name", response[0].name);
                localStorage.setItem("clicked", true);
            }else if(clicked === false){

            }

        }

    });
});



/*
*/