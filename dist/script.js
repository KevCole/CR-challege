$(document).ready(function() {
    console.log("ready")
    $.get("https://fi4pfa2jd4.execute-api.us-east-1.amazonaws.com/Stage/update",function(data){
        console.log(data)
        $("#counter").html(data)
    })
})