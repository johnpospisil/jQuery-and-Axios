var url = 'https://dog.ceo/api/breeds/image/random';

$("#getJSONBtn").click(function(){
    $.getJSON(url)
    .done(function(data){
        console.log(data);
        $("img").attr("src", data.message);
    })
    .fail(function(){
        console.log("PROBLEM!");
    })
});
