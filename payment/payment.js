$("#backBtn").click(function() {
    window.history.back();
});

$("#logo").click(function(){
    window.location = "../homepage.html";
});

$("#purchaseBtn").click(function(){
    window.location = "../successpage/successPage.html";
});



/*
start of api testing on the payment page
*/

$("#test").click(function(){

    $.ajax({
        url: "../api/api.json",
        method: "GET",
        success: function(response){

            response.forEach(function(item){
                $("#itemsChosen").append("<div class='sectionOfItem' id='" + item.name + "Div'></div>");
                $("#" + item.name + "Div").append("<img class='summaryImg' id='" + item.name + "Img' src=" + item.image_url + ">");
                $("#" + item.name + "Div").append("<h3 class='itemName2' id='" + item.name + "Title'>" + item.name + "</h3>");
                $("#" + item.name + "Div").append("<h3 class='itemName1' id='" + item.name + "Price'>" + item.variations[0].price + "</h3>");
            });
            /*
            $("#itemsChosen").append("<img class='summaryImg' src=" + response[0].image_url + ">")
            $("#itemName1").text(response[0].variations[2].name);
            $("#itemName2").text(response[0].variations[2].price);
            */
        }


    });

});




/*
end
*/