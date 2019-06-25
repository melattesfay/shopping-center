$("#backBtn").click(function() {
    window.history.back();
});

$("#logo").click(function(){
    window.location = "../homepage.html";
});

/*
start of api testing on the payment page
*/

$("#test").click(function(){

    $.ajax({
        url: "../api/api.json",
        method: "GET",
        success: function(response){
            $("#itemsChosen").append("<img class='summaryImg' src=" + response[0].image_url + ">")
            $("#itemName1").text(response[0].variations[2].name);
            $("#itemName2").text(response[0].variations[2].price);
        }


    });

});




/*
end
*/