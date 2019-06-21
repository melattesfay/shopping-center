$("#backBtn").click(function() {
    window.history.back();
});


/*
start of api testing on the payment page
*/

$("#test").click(function(){

    $.ajax({
        url: "../api/api.json",
        method: "GET",
        success: function(response){

            $("#itemName4").text(response[0].description);
            $(".imgDiv1").append("<img class='itemTwo' src=" + response[0].image_url + ">")
            $("#itemName3").text(response[0].name);
            $("#itemName1").text(response[0].variations[2].price);



        }


    });

});




/*
end
*/