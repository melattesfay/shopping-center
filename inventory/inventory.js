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


<<<<<<< HEAD

=======
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
}
>>>>>>> d7378cc757f33d679fc261889f5336fd39ab6af0

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
    $(".content").append("<div class='imgDiv1'></div>");
    $(".imgDiv").append("<img class='items' src=" + "https://images.ctfassets.net/2d5q1td6cyxq/2SqLXL2zJmcUUI2QSkUCy6/71701594cb1fdf6f2e60d34297262d6b/square.01.jpg" + ">")
    $(".imgDiv1").append("<div class='overlay'></div>");
    $(".overlay").append("<div class='text'> </div>");
    $(".text").append("View Details");
}


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

  /*  $("#testDiv").text("test");
});*/


 function Form() {
  document.getElementById("myForm").style.display = "block";
   $("body").css("background-color", "grey");

}


function closeForm() {
  document.getElementById("myForm").style.display = "none";
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
var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

});


function getName(){

    $.ajax({
        url: "../api/api.json",
        method: "GET",
        success: function(response){
            $("#testDiv").text(response[0].name[0]);



        }

    });
}