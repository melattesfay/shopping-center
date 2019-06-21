/*global $*/

$("#cartBtn").click(function(){
    window.location = "cart.html";

});

$("#backBtn").click(function() {
    window.history.back();
});

$("#logo").click(function(){
    window.location = "homepage.html";
});


  var data = getCatalog();
    data.forEach(function(item) {
        console.log(item.name);
    });

    /*
    $.ajax({
        url: "../api/api.json",
        method: "GET",
        success: function(response){
            $("#testDiv").text(response[0].name);
        }

    });
    */

$("#test").click(function(){
      getName();
});

$("#test3").click(function(){
    $(".content").empty();
});

$("#test2").click(function(){
    testToAppendImg();

});

function testToAppendImg(){

    $.ajax({
        url: "../api/api.json",
        method: "GET",
        success: function(response){


            // empty the div before appending
            $('content').empty();
           /*
           The problem with this code is that it works the first time the button is pressed but the second
           time the button is pressed 2 imgs will be appended, not one. The reason for this is that the second
           time the button is pressed the first line will work fine but the second line of code where the img
           is appended to .imgDiv1, the img will also append to the first div we made when the button was first clicked.
           since the 2 divs we made have the same class the img will append to the new div AND to the first div,
           resulting in 3 imgs in 2 clicks*/

            $(".content").append("<div class='imgDiv1'></div>");
            $(".imgDiv1").append("<img class='items' src=" + response[0].image_url + ">")
            $(".imgDiv1").append("<div class='overlay'></div>");
            $(".overlay").append("<div class='text'> </div>");
            $(".text").append("View Details");

        }

    });
}


/*
    $(".content").append("<div class='imgDiv1'></div>");
    $(".imgDiv").append("<img class='items' src=" + "https://images.ctfassets.net/2d5q1td6cyxq/2SqLXL2zJmcUUI2QSkUCy6/71701594cb1fdf6f2e60d34297262d6b/square.01.jpg" + ">")
    $(".imgDiv1").append("<div class='overlay'></div>");
    $(".overlay").append("<div class='text'> </div>");
    $(".text").append("View Details");
    */


/*var num = "0"
function testId(){
    var self = parseInt(num);
    self = self + 1;
    self = self.toString();
    num = self;
    console.log(num);

}
var stringTest = "#" + num;
$("#test4").click(function(){
    testId();
    $("#testP").text(stringtest);
});
*/


function openForm() {
function Form() {
  document.getElementById("myForm").style.display = "block";
  $("#content").html(hide);
   $("body").css("background-color", "grey");

  /*  $("#testDiv").text("test");
});*/
}
}


 function Form() {
  document.getElementById("myForm").style.display = "block";
   $("body").css("background-color", "grey");

}


function closeForm() {

  document.getElementById("myDiv").style.display = "none";
   document.getElementById$("myForm").style.display ="none";
 $("body").css("background-color", "white");
}


$(".text").click(function(){
$("body").css("background-color", "grey");
var x = document.getElementById("myDIV");

  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
});

$("#close-button").click(function(){
    $(".form-popup").hide();
    $("myDIV").show();
     $("body").css("background-color", "white");
var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

});


