$("#btn").click(function(){
    $.ajax({
        method: "GET",
        url: "https://baconipsum.com/api/?type=meat-and-filler",
        // If the following line in not present, jQuery will try to 
        // intelligently guess what the data type is (JSON, XML, HTML...)
        dataType: 'json'
    })
    .done(function(data){
        console.log(data);
        // Assign the first entry of the returned data array to 
        // any paragraph in the HTML file.
        $("p").text(data[0]);
    })
    .fail(function(){
        alert("Oh no! Failed!");
    })
});