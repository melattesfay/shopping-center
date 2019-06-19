$("#backBtn").click(function(){
    window.history.back();
});
var currentVal = 1;
$("#plus").click(function(){
    currentVal = currentVal + 1;
    $("#input").val(currentVal);
});

$("#minus").click(function(){
    currentVal = currentVal - 1;
    $("#input").val(currentVal);
});

