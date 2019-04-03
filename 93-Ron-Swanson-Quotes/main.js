var url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';

var btnXhr = document.querySelector("#xhr");
var btnFetch = document.querySelector("#fetch");
var btnAxios = document.querySelector("#axios");
var quoteDisplay = document.querySelector("#quote");

// XHR --------------------------------------
btnXhr.addEventListener("click", function() {
var XHR = new XMLHttpRequest();

XHR.onreadystatechange = function() {
  // console.log("Ready State is..." + XHR.readyState);
  //   If the readyState is "Done"...
  if(XHR.readyState == 4) {
    // If the status code is "OK"...
    if(XHR.status == 200) {
      // log the data returned by the API
    //   console.log(XHR.responseText);
      quoteDisplay.innerText = JSON.parse(XHR.responseText);
    } else{
      console.log("There was a problem.");
    }
    
  }
}

XHR.open("GET", url);
XHR.send();
});



// FETCH --------------------------------------
btnFetch.addEventListener("click", function() {
    fetch(url)
      .then(handleErrors)
      .then(parseJSON)
      .then(updateQuote)
      .catch(printError);
  });

  function handleErrors(promise) {
    if (!promise.ok) {
      throw Error(promise.status);
    }
    return promise;
  }
  
  function parseJSON(res) {
    return res.json();
  }
  
  function updateQuote(data) {
    //   console.log(data[0]);
      quoteDisplay.innerText = data[0];
  }
  
  function printError(err) {
    console.log(err);
  }

// JQUERY --------------------------------------
$("#jquery").click(function(){
    $.getJSON(url)
    .done(function(data){
        // console.log(data[0]);
        $("#quote").text(data[0]);
    })
    .fail(function(){
        console.log("PROBLEM!");
    })
});

// AXIOS --------------------------------------
btnAxios.addEventListener("click", function() {
    axios.get(url)
    .then(function(res){
        // console.log(res.data[0])
        quoteDisplay.textContent = res.data[0];
    })
    .catch(function(err){
        if(err.response){
            console.log("Problem with Response! ", err.response.status);
        } else {
            console.log("Error!", err.message);
        }
    })
});
