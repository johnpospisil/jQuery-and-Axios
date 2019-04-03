// var url = 'https://opentdb.com/api.php?amount=1';
var url = 'https://opentdb.com/api.php?amoun';

axios.get(url)
.then(function(res){
    console.log(res.data)
    console.log(res.data.results[0].question)
    console.log(res.data.results[0].correct_answer)
})
.catch(function(err){
    if(err.response){
        console.log("Problem with Response! ", err.response.status);
    } else {
        console.log("Error!", err.message);
    }
})
