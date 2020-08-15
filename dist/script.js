$(document).ready(function() {
    console.log("Ready!")
    $.get("https://fi4pfa2jd4.execute-api.us-east-1.amazonaws.com/Prod/update",function(data){
        console.log(data)
        $("#counter").html(data)
    })
})