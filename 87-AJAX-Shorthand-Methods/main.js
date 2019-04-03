$("#getBtn").click(function(){

    $.get('https://api.github.com/users/johnpospisil')
    .done(function(data){
        console.log(data);
    })
    .fail(function(){
        console.log("ERROR!");
    })
});

$("#postBtn").click(function(){
    var data = {name: "Jordi", city: "New York"};
    // For this example, this button should fail.
    // You can see this in the browser console, under the Network -> XHR tabs/
    $.post("https://www.example.com", data)
    .done(function(data){
        console.log("HI!");
    })
    .fail(function(){
        console.log("ERROR!");
    })
});

$("#getJSONBtn").click(function(){
    $.getJSON('https://api.github.com/users/johnpospisil')
    .done(function(data){
        console.log(data);
    })
    .fail(function(){
        console.log("PROBLEM!");
    })
});
