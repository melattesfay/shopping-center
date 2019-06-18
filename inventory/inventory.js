$("#cartBtn").click(function(){
    window.location = "cart.html";

});

$("#backBtn").click(function() {
    window.history.back();
});

function getName(){
    var url = "https://c52otmsk20.execute-api.us-west-1.amazonaws.com/dev/inventory";
    $.ajax({
        url: url,
        method: "GET",
        success: function(response){
            $("#testDiv").append(response[0].name);
        }

    });
}

$("#test").click(function(){
    getName();

});