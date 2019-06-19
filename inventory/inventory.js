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

function getName(){

    $.ajax({
        url: "https://c52otmsk20.execute-api.us-west-1.amazonaws.com/dev/inventory",
        method: "GET",
        success: function(response){
            $("#testDiv").text(response.name);
        }

    });
}

$("#test").click(function(){
    getName();

});

$("#test2").click(function(){
    $("#testDiv").text("test");
});


function openForm() {
  document.getElementById("myForm").style.display = "block";
  $("#content").html(hide);
}

function closeForm() {
  document.getElementById("myDiv").style.display = "none";
   document.getElementById$("myForm").style.display ="none";
 
}

$(".open-button").click(function(){
$("body").css("background-color", "grey");
var x = document.getElementById("myDIV");

  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
});

$("#close-button").click(function(){
var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
});
$("#close-button").click(function(){
var y = document.getElementById("form-popup");
  ("#myform").hide();
});